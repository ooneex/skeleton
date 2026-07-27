use dioxus::document::eval;
use dioxus::prelude::*;

/// Wires up Escape-to-dismiss, body scroll lock and a focus-on-open for a
/// dialog popup, mirroring the TypeScript `useDialogBehavior` hook.
///
/// `modal = true` locks body scroll. Pass `modal = false` to disable it.
///
/// The Escape-key listener is document-level (using `dioxus::document::eval`)
/// and stays active for the lifetime of the component. It only calls `on_dismiss`
/// when the dialog is currently open.
pub fn use_dialog_behavior(
    open: Signal<bool>,
    modal: bool,
    popup_id: String,
    on_dismiss: Callback<()>,
) {
    // Persistent document-level Escape-key listener.
    use_future(move || async move {
        let mut ev = eval(
            r#"
            const handler = (e) => {
                if (e.key === "Escape" && !e.defaultPrevented) {
                    dioxus.send(true);
                    e.preventDefault();
                }
            };
            document.addEventListener("keydown", handler, { capture: true });
            await dioxus.recv();
            document.removeEventListener("keydown", handler, { capture: true });
            "#,
        );
        while ev.recv::<bool>().await.is_ok() {
            if *open.read() {
                on_dismiss.call(());
            }
        }
    });

    // Body scroll lock toggled by open state.
    use_effect(move || {
        if !modal {
            return;
        }
        let is_open = *open.read();
        spawn(async move {
            if is_open {
                let _ = eval("document.body.style.overflow='hidden';").await;
            } else {
                let _ = eval("document.body.style.overflow='';").await;
            }
        });
    });

    // Auto-focus the popup element when it opens.
    use_effect(move || {
        let is_open = *open.read();
        if !is_open {
            return;
        }
        let id = popup_id.clone();
        spawn(async move {
            let _ = eval(&format!(
                r#"const el=document.getElementById("{id}");if(el){{const af=el.querySelector("[autofocus],[data-autofocus]");(af??el).focus();}}"#,
            ))
            .await;
        });
    });
}
