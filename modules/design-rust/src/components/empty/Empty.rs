use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Empty state root component. Compose with `EmptyHeader`, `EmptyMedia`,
/// `EmptyTitle`, `EmptyDescription`, and `EmptyContent`.
#[component]
pub fn Empty(props: EmptyProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty",
            class: cn([
                "gap-4 rounded border-dashed p-12 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
