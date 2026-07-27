use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyHeaderProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn EmptyHeader(props: EmptyHeaderProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty-header",
            class: cn(["gap-2 flex max-w-sm flex-col items-center", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
