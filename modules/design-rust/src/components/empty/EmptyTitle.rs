use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyTitleProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn EmptyTitle(props: EmptyTitleProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty-title",
            class: cn(["text-sm font-medium tracking-tight", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
