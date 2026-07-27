use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressLabelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn ProgressLabel(props: ProgressLabelProps) -> Element {
    rsx! {
        span {
            "data-slot": "progress-label",
            class: cn(["text-sm font-medium", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
