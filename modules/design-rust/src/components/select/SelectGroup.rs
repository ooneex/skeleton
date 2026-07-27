use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SelectGroupProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Groups related select items together under an optional label.
#[component]
pub fn SelectGroup(props: SelectGroupProps) -> Element {
    rsx! {
        div {
            "data-slot": "select-group",
            role: "group",
            class: cn(["scroll-my-1 p-1", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
