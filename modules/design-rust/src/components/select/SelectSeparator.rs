use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SelectSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// A visual horizontal divider between groups of select items.
#[component]
pub fn SelectSeparator(props: SelectSeparatorProps) -> Element {
    rsx! {
        div {
            "data-slot": "select-separator",
            role: "separator",
            "aria-orientation": "horizontal",
            class: cn([
                "bg-border -mx-1 my-1 h-px pointer-events-none",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
