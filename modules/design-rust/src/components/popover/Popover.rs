use dioxus::prelude::*;

use super::popoverContext::PopoverContext;
use crate::hooks::{use_controlled_state, use_id};

#[derive(Props, Clone, PartialEq)]
pub struct PopoverProps {
    /// Controlled open state.
    #[props(default)]
    pub open: Option<bool>,
    /// Initial open state when uncontrolled.
    #[props(default = false)]
    pub default_open: bool,
    /// Called when the open state changes.
    pub on_open_change: Option<EventHandler<bool>>,
    pub children: Element,
}

/// Popover compound component root. Provides context for trigger and content.
///
/// Use `PopoverTrigger` and `PopoverContent` as children; optionally add
/// `PopoverHeader`, `PopoverTitle` and `PopoverDescription` inside the content.
#[component]
pub fn Popover(props: PopoverProps) -> Element {
    let (open, set_open) =
        use_controlled_state(props.open, props.default_open, props.on_open_change);

    let trigger_id_val = use_id("popover-trigger");
    let positioner_id_val = use_id("popover-positioner");

    let trigger_id = use_signal(|| trigger_id_val.clone());
    let positioner_id = use_signal(|| positioner_id_val.clone());

    use_context_provider(|| PopoverContext {
        open,
        set_open,
        trigger_id,
        positioner_id,
    });

    rsx! { {props.children} }
}
