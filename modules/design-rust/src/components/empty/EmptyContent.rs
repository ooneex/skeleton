use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn EmptyContent(props: EmptyContentProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty-content",
            class: cn([
                "gap-4 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
