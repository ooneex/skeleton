use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct EmptyDescriptionProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn EmptyDescription(props: EmptyDescriptionProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty-description",
            class: cn([
                "text-sm text-muted-foreground [&>a:hover]:text-foreground [&>a]:underline [&>a]:underline-offset-4",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
