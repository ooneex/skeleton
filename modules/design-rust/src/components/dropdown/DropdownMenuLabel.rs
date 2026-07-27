use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuLabelProps {
    #[props(default = false)]
    pub inset: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Non-interactive label row inside a dropdown menu or group.
#[component]
pub fn DropdownMenuLabel(props: DropdownMenuLabelProps) -> Element {
    rsx! {
        div {
            "data-slot": "dropdown-menu-label",
            "data-inset": props.inset.then_some(""),
            class: cn([
                "text-muted-foreground px-2 py-1.5 text-xs font-medium data-[inset]:pl-8",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
