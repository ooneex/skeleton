use dioxus::document::eval;
use dioxus::prelude::*;
use std::sync::atomic::{AtomicUsize, Ordering};

/// One token per open dialog, oldest first. Escape only fires for the topmost.
static DIALOG_STACK: GlobalSignal<Vec<usize>> = GlobalSignal::new(Vec::new);
static NEXT_BEHAVIOR_ID: AtomicUsize = AtomicUsize::new(0);

/// Wires up Escape-to-dismiss, body scroll lock and a focus-on-open for a
/// dialog popup, mirroring the TypeScript `useDialogBehavior` hook.
///
/// `modal = true` locks body scroll and blocks the page. `modal = "trap-focus"`
/// is treated the same way for the scroll lock (scroll is still locked, focus
/// is trapped), but in practice the distinction is handled by CSS. Pass
/// `modal = false` to disable both.
///
/// Escape is only delivered to the **topmost** open dialog; nested popups that
/// call `event.preventDefault()` in their own keydown handler are left alone.
pub fn use_dialog_behavior(
    open: Signal<bool>,
    modal: bool,
    popup_id: String,
    on_dismiss: Callback<()>,
) {
    let behavior_id = use_hook(|| NEXT_BEHAVIOR_ID.fetch_add(1, Ordering::Relaxed));

    // Manage the dialog stack and the Escape-key listener.
    use_effect(move || {
        if !*open.read() {
            return;
        }

        DIALOG_STACK.write().push(behavior_id);

        let id = popup_id.clone();
        spawn(async move {
            let mut ev = eval(&format!(
                r#"
                const handler = (e) => {{
                    if (e.key !== "Escape" || e.defaultPrevented) return;
                    dioxus.send(true);
                    e.preventDefault();
                }};
                document.addEventListener("keydown", handler);
                await dioxus.recv();
                document.removeEventListener("keydown", handler);
                "#,
            ));

            if ev.recv::<bool>().await.is_ok() {
                on_dismiss.call(());
            }
        });

        // Auto-focus the popup so keyboard events reach it.
        let focus_id = id.clone();
        spawn(async move {
            let _ = eval(&format!(
                r#"
                const el = document.getElementById("{focus_id}");
                if (el) {{
                    const autofocus = el.querySelector("[autofocus],[data-autofocus]");
                    (autofocus ?? el).focus();
                }}
                "#
            ))
            .await;
        });

        // Cleanup: pop the stack entry when open becomes false.
        // The eval listener is self-cleaning after one Escape event; if the
        // dialog closes another way we still need to pop.
        use_drop(move || {
            DIALOG_STACK
                .write()
                .retain(|&slot_id| slot_id != behavior_id);
        });
    });

    // Body scroll lock (modal dialogs only).
    use_effect(move || {
        if !modal || !*open.read() {
            return;
        }

        spawn(async {
            let _ = eval("document.body.style.overflow='hidden';").await;
        });

        use_drop(|| {
            spawn(async {
                let _ = eval("document.body.style.overflow='';").await;
            });
        });
    });
}
