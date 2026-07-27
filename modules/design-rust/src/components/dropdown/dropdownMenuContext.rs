use dioxus::prelude::*;

/// Root-level dropdown menu state shared across trigger, content and all item types.
#[derive(Clone, Copy)]
pub(crate) struct DropdownMenuContext {
    pub(crate) open: Signal<bool>,
    pub(crate) set_open: Callback<bool>,
    /// DOM element id of the trigger button; used as the anchor for positioning.
    pub(crate) trigger_id: Signal<String>,
    /// DOM element id of the `position: fixed` positioner wrapper inside the content.
    pub(crate) positioner_id: Signal<String>,
    /// Stamped on every popup element in this tree via `data-dropdown-popup`;
    /// the outside-click detector uses `closest('[data-dropdown-popup="…"]')`.
    pub(crate) group_id: Signal<String>,
    pub(crate) close_all: Callback<()>,
}

/// State for a single submenu level; provided by `DropdownMenuSub`.
#[derive(Clone, Copy)]
pub(crate) struct DropdownMenuSubContext {
    pub(crate) open: Signal<bool>,
    pub(crate) set_open: Callback<bool>,
    /// DOM element id of the sub-trigger `div`; used as anchor for sub-content positioning.
    pub(crate) trigger_id: Signal<String>,
    /// DOM element id of the `position: fixed` positioner wrapper inside the sub-content.
    pub(crate) positioner_id: Signal<String>,
    /// DOM element id of the sub-content popup `div`; used for keyboard navigation.
    pub(crate) popup_id: Signal<String>,
    pub(crate) cancel_close: Callback<()>,
    /// Close the submenu after a short delay (150 ms); cancelled by pointer re-enter.
    pub(crate) schedule_close: Callback<()>,
}

/// Value/change context provided by `DropdownMenuRadioGroup`.
#[derive(Clone, Copy)]
pub(crate) struct DropdownMenuRadioGroupContext {
    pub(crate) value: Signal<Option<String>>,
    pub(crate) set_value: Callback<String>,
}
