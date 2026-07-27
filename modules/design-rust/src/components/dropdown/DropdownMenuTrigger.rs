use dioxus::prelude::*;

use super::dropdownMenuContext::DropdownMenuContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Trigger button that opens/closes the dropdown.
///
/// Sets `aria-haspopup="menu"` and `aria-expanded`; toggles the menu on click
/// and opens it on `ArrowDown` while closed.
#[component]
pub fn DropdownMenuTrigger(props: DropdownMenuTriggerProps) -> Element {
    let ctx = use_context::<DropdownMenuContext>();

    let open = *ctx.open.read();
    let trigger_id = ctx.trigger_id.read().clone();

    rsx! {
        button {
            r#type: "button",
            id: trigger_id,
            "data-slot": "dropdown-menu-trigger",
            "aria-haspopup": "menu",
            "aria-expanded": if open { "true" } else { "false" },
            "data-popup-open": open.then_some(""),
            class: cn([props.class.as_deref().unwrap_or_default()]),
            onclick: move |_| ctx.set_open.call(!*ctx.open.peek()),
            onkeydown: move |event| {
                if event.key() == Key::ArrowDown && !*ctx.open.peek() {
                    event.prevent_default();
                    ctx.set_open.call(true);
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
