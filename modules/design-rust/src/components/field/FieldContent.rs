use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct FieldContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn FieldContent(props: FieldContentProps) -> Element {
    rsx! {
        div {
            "data-slot": "field-content",
            class: cn([
                "gap-1 group/field-content flex flex-1 flex-col leading-snug",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
