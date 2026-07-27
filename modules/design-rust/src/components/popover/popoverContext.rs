use dioxus::prelude::*;

/// Popover root-level state shared across trigger and content.
#[derive(Clone, Copy)]
pub(crate) struct PopoverContext {
    pub(crate) open: Signal<bool>,
    pub(crate) set_open: Callback<bool>,
    /// DOM element id of the trigger button; used as anchor for positioning.
    pub(crate) trigger_id: Signal<String>,
    /// DOM element id of the `position: fixed` positioner div inside the content.
    pub(crate) positioner_id: Signal<String>,
}

/// Title/description registration context provided by `PopoverContent`.
///
/// Replaces the React `DialogContext` used by the TS port (which is private
/// to the `dialog` module here). `PopoverTitle` and `PopoverDescription`
/// write their ids here; `PopoverContent` reads them for `aria-labelledby`
/// and `aria-describedby`.
#[derive(Clone, Copy)]
pub(crate) struct PopoverContentContext {
    pub(crate) title_id: Signal<Option<String>>,
    pub(crate) description_id: Signal<Option<String>>,
}
