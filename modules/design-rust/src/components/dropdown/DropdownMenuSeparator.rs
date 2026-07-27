use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DropdownMenuSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = hr, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Visual separator between groups of menu items.
#[component]
pub fn DropdownMenuSeparator(props: DropdownMenuSeparatorProps) -> Element {
    rsx! {
        hr {
            "data-slot": "dropdown-menu-separator",
            class: cn([
                "bg-ring-active -mx-1 my-1 h-[0.4px] border-none",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
