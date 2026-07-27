use dioxus::prelude::*;

use super::dropdownMenuContext::{DropdownMenuContext, DropdownMenuRadioGroupContext};
use crate::hooks::{use_controlled_state, use_id};

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuProps {
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

/// Dropdown menu root. Provides context consumed by all sub-components.
///
/// Use the companion components (`DropdownMenuTrigger`, `DropdownMenuContent`,
/// `DropdownMenuItem`, etc.) to compose a full dropdown.
#[component]
pub fn DropdownMenu(props: DropdownMenuProps) -> Element {
    let (open, set_open) =
        use_controlled_state(props.open, props.default_open, props.on_open_change);

    let trigger_id_val = use_id("dm-trigger");
    let positioner_id_val = use_id("dm-positioner");
    let group_id_val = use_id("dm-group");

    let trigger_id = use_signal(|| trigger_id_val.clone());
    let positioner_id = use_signal(|| positioner_id_val.clone());
    let group_id = use_signal(|| group_id_val.clone());

    let close_all = use_callback(move |()| set_open.call(false));

    use_context_provider(|| DropdownMenuContext {
        open,
        set_open,
        trigger_id,
        positioner_id,
        group_id,
        close_all,
    });

    // Provide a default radio group context so RadioItem can safely call
    // use_context without panicking when used outside a RadioGroup.
    let radio_value = use_signal(|| None::<String>);
    let radio_set = use_callback(move |_: String| {});
    use_context_provider(|| DropdownMenuRadioGroupContext {
        value: radio_value,
        set_value: radio_set,
    });

    rsx! { {props.children} }
}
