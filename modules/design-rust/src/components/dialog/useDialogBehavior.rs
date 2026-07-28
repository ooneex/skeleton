use std::sync::atomic::{AtomicU64, Ordering};

use dioxus::document::eval;
use dioxus::prelude::*;

/// How much of the page a dialog takes over while it is open, mirroring the
/// TypeScript `modal?: boolean | "trap-focus"` prop.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum DialogModalType {
    /// Neither scroll lock nor focus management — the page stays fully usable
    /// and focus may leave the popup (TypeScript `false`).
    None,
    /// Locks body scroll, blocks the page and traps focus in the popup
    /// (TypeScript `true`).
    #[default]
    Modal,
    /// Traps focus in the popup but leaves the page scrollable and interactive
    /// (TypeScript `'trap-focus'`).
    TrapFocus,
}

impl DialogModalType {
    /// The code this mode is written as in the TypeScript prop.
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::None => "false",
            Self::Modal => "true",
            Self::TrapFocus => "trap-focus",
        }
    }

    /// Whether this mode locks body scroll and blocks the page behind the popup.
    pub fn is_blocking(&self) -> bool {
        matches!(self, Self::Modal)
    }

    /// Whether this mode manages focus: initial focus on open, a Tab trap while
    /// open, and focus restored to the opener on close.
    pub fn traps_focus(&self) -> bool {
        !matches!(self, Self::None)
    }
}

/// Identifies a hook instance across the `eval` boundary for the lifetime of the
/// component.
static NEXT_TOKEN: AtomicU64 = AtomicU64::new(0);

/// Orders open dialogs: the highest number that is still registered is the
/// topmost one. Allocated synchronously in Rust the moment a dialog opens, so
/// two dialogs opening back to back can never be ranked out of order by the
/// asynchronous `eval` queue.
static NEXT_OPEN_ORDER: AtomicU64 = AtomicU64::new(0);

/// Creates (once per page) the state every dialog instance shares, and binds it
/// to `S` for the snippet that follows.
///
/// The stack of open dialogs, the scroll-lock count and the saved focus live on
/// `window` rather than in a Rust `static` because every consumer of them is a
/// browser API that has to run synchronously inside a `keydown` handler: only
/// JavaScript can decide *during* the event whether this dialog is the topmost
/// one and therefore whether to call `preventDefault`. A Rust-side stack would
/// only be readable one asynchronous round trip too late. Ordering is still
/// decided in Rust — see `NEXT_OPEN_ORDER`.
const STATE_BOOTSTRAP: &str = r#"
const S = (window.__ooneexDialogState = window.__ooneexDialogState || {
    stack: new Map(),
    locks: new Set(),
    traps: new Map(),
    restore: new Map(),
    prevOverflow: "",
});
"#;

/// Document-level `keydown` listener owned by one dialog instance: Escape
/// dismissal for the topmost dialog and Tab cycling inside the popup. Its
/// teardown also releases everything this instance still holds, so unmounting
/// mid-flight cannot leak a scroll lock or a stack entry.
const LISTENER_SCRIPT: &str = r#"
const TOKEN = __TOKEN__;
const FOCUSABLE = "a[href], button:not([disabled]), input:not([disabled]):not([type='hidden']), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

const topmost = () => {
    let top = null;
    for (const order of S.stack.values()) {
        if (top === null || order > top) top = order;
    }
    return top;
};

const deepestTrap = (target) => {
    let best = null;
    let bestOrder = -1;
    for (const [other, id] of S.traps) {
        const el = document.getElementById(id);
        if (!el || !el.contains(target)) continue;
        const order = S.stack.has(other) ? S.stack.get(other) : -1;
        if (order >= bestOrder) {
            bestOrder = order;
            best = other;
        }
    }
    return best;
};

const handler = (event) => {
    if (event.defaultPrevented) return;

    if (event.key === "Escape") {
        const mine = S.stack.get(TOKEN);
        if (mine === undefined || mine !== topmost()) return;
        event.preventDefault();
        dioxus.send(true);
        return;
    }

    if (event.key !== "Tab") return;
    const popupId = S.traps.get(TOKEN);
    if (!popupId) return;
    const popup = document.getElementById(popupId);
    if (!popup || !popup.contains(event.target)) return;
    if (deepestTrap(event.target) !== TOKEN) return;

    const focusable = Array.from(popup.querySelectorAll(FOCUSABLE));
    if (focusable.length === 0) {
        event.preventDefault();
        popup.focus();
        return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    const active = document.activeElement;
    if (event.shiftKey) {
        if (active === first || active === popup) {
            event.preventDefault();
            last.focus();
        }
    } else if (active === last) {
        event.preventDefault();
        first.focus();
    }
};

document.addEventListener("keydown", handler);
await dioxus.recv();
document.removeEventListener("keydown", handler);
S.stack.delete(TOKEN);
S.traps.delete(TOKEN);
if (S.locks.delete(TOKEN) && S.locks.size === 0) {
    document.body.style.overflow = S.prevOverflow;
}
const previous = S.restore.get(TOKEN);
if (S.restore.delete(TOKEN) && previous && previous.isConnected) previous.focus();
"#;

/// Joins the stack of open dialogs at the rank Rust just handed out.
const REGISTER_SCRIPT: &str = "S.stack.set(__TOKEN__, __ORDER__);";

/// Leaves the stack, handing Escape back to whichever dialog is now topmost.
const UNREGISTER_SCRIPT: &str = "S.stack.delete(__TOKEN__);";

/// Takes one reference on the body scroll lock, remembering the overflow the
/// page already had so the last release can put it back.
const LOCK_SCRIPT: &str = r#"
if (!S.locks.has(__TOKEN__)) {
    if (S.locks.size === 0) S.prevOverflow = document.body.style.overflow;
    S.locks.add(__TOKEN__);
    document.body.style.overflow = "hidden";
}
"#;

/// Drops this instance's reference on the scroll lock, restoring the previous
/// overflow only once every dialog has let go.
const UNLOCK_SCRIPT: &str = r#"
if (S.locks.delete(__TOKEN__) && S.locks.size === 0) {
    document.body.style.overflow = S.prevOverflow;
}
"#;

/// Arms the focus trap, remembers what was focused before, and moves focus to
/// the popup's `[autofocus]` element (or the popup itself).
const FOCUS_ACTIVATE_SCRIPT: &str = r#"
const TOKEN = __TOKEN__;
const apply = () => {
    const popup = document.getElementById("__POPUP__");
    if (!popup) return false;
    S.traps.set(TOKEN, "__POPUP__");
    if (!S.restore.has(TOKEN)) {
        const active = document.activeElement;
        S.restore.set(TOKEN, active instanceof HTMLElement ? active : null);
        const initial = popup.querySelector("[autofocus], [data-autofocus]");
        (initial || popup).focus();
    }
    return true;
};
if (!apply()) requestAnimationFrame(apply);
"#;

/// Disarms the focus trap and hands focus back to whatever opened the dialog,
/// as long as that element is still in the document.
const FOCUS_RELEASE_SCRIPT: &str = r#"
const TOKEN = __TOKEN__;
S.traps.delete(TOKEN);
const previous = S.restore.get(TOKEN);
if (S.restore.delete(TOKEN) && previous && previous.isConnected) previous.focus();
"#;

/// Prepends the shared-state bootstrap to a snippet and fills in its
/// per-instance placeholders.
fn dialog_script(body: &str, token: u64, popup_id: &str, order: u64) -> String {
    let body = body
        .replace("__TOKEN__", &token.to_string())
        .replace("__ORDER__", &order.to_string())
        .replace("__POPUP__", popup_id);

    format!("{STATE_BOOTSTRAP}{body}")
}

/// Escape-to-dismiss, body scroll lock and focus management for a dialog popup,
/// mirroring the TypeScript `useDialogBehavior` hook.
///
/// While the dialog is open it:
/// - joins a page-wide stack of open dialogs, so **only the topmost one**
///   answers Escape — a nested dialog closes without taking its parent with it,
///   and a popup that already handled Escape itself (`preventDefault`) is left
///   alone;
/// - takes a **ref-counted** lock on `body` scroll when `modal` is
///   [`DialogModalType::Modal`], restoring the overflow the page had before the
///   first lock only once the last dialog releases it;
/// - focuses the popup's `[autofocus]`/`[data-autofocus]` element (or the popup
///   itself), **traps Tab and Shift+Tab** inside it, and restores focus to
///   whatever was focused before when it closes. Skipped entirely for
///   [`DialogModalType::None`].
///
/// # Rust differences from TypeScript
/// The crate has no `web-sys`, so all of the above runs as browser snippets sent
/// through [`dioxus::document::eval`]; the shared stack, lock count and saved
/// focus live on `window` (see `STATE_BOOTSTRAP` for why) while the ordering of
/// the stack is decided by a Rust counter so the asynchronous `eval` queue
/// cannot shuffle it. Escape is the only event that needs a round trip back to
/// Rust; Tab cycling never leaves the browser.
pub fn use_dialog_behavior(
    open: Signal<bool>,
    modal: DialogModalType,
    popup_id: String,
    on_dismiss: Callback<()>,
) {
    let token = use_hook(|| NEXT_TOKEN.fetch_add(1, Ordering::Relaxed));
    let mut open_order = use_signal(|| None::<u64>);

    // Keydown listener owned by this instance, alive until the component drops.
    use_future(move || async move {
        let mut listener = eval(&dialog_script(LISTENER_SCRIPT, token, "", 0));

        while listener.recv::<bool>().await.is_ok() {
            if *open.read() {
                on_dismiss.call(());
            }
        }
    });

    // Membership of the stack that decides which dialog Escape belongs to.
    use_effect(move || {
        if !open() {
            open_order.set(None);
            eval(&dialog_script(UNREGISTER_SCRIPT, token, "", 0));
            return;
        }

        if open_order.peek().is_none() {
            open_order.set(Some(NEXT_OPEN_ORDER.fetch_add(1, Ordering::Relaxed)));
        }

        let order = open_order.peek().unwrap_or_default();
        eval(&dialog_script(REGISTER_SCRIPT, token, "", order));
    });

    // Ref-counted body scroll lock, held only while open and fully modal.
    use_effect(use_reactive!(|(modal,)| {
        let script = if open() && modal.is_blocking() {
            LOCK_SCRIPT
        } else {
            UNLOCK_SCRIPT
        };
        eval(&dialog_script(script, token, "", 0));
    }));

    // Initial focus, Tab trap and focus restoration.
    use_effect(use_reactive!(|(modal, popup_id)| {
        let script = if open() && modal.traps_focus() {
            FOCUS_ACTIVATE_SCRIPT
        } else {
            FOCUS_RELEASE_SCRIPT
        };
        eval(&dialog_script(script, token, &popup_id, 0));
    }));
}
