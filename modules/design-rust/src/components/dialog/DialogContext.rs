use dioxus::prelude::*;

/// Shared state of a dialog instance. Provided by `DialogContent` (and
/// `AlertDialogContent`) and consumed by title, description, footer and any
/// other sub-component that needs to communicate back to the host.
#[derive(Clone, Copy)]
pub(crate) struct DialogContextValue {
    #[allow(dead_code)]
    pub(crate) open: Signal<bool>,
    pub(crate) dismiss: Callback<()>,
    /// Stable id wired to the title element for `aria-labelledby`.
    pub(crate) title_id: Signal<String>,
    /// Stable id wired to the description element for `aria-describedby`.
    pub(crate) description_id: Signal<String>,
    /// Set to `true` when a `DialogTitle` / `AlertDialogTitle` mounts.
    pub(crate) has_title: Signal<bool>,
    /// Set to `true` when a `DialogDescription` / `AlertDialogDescription` mounts.
    pub(crate) has_description: Signal<bool>,
}

/// Returns the closest dialog context, or `None` when used outside a dialog.
pub(crate) fn use_dialog_context() -> Option<DialogContextValue> {
    try_use_context::<DialogContextValue>()
}
