use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PopoverHeaderProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Stacked title + description container inside a popover.
#[component]
pub fn PopoverHeader(props: PopoverHeaderProps) -> Element {
    rsx! {
        div {
            "data-slot": "popover-header",
            class: cn([
                "flex flex-col gap-1 text-sm",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
