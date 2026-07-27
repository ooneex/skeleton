use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressValueProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn ProgressValue(props: ProgressValueProps) -> Element {
    rsx! {
        span {
            "data-slot": "progress-value",
            class: cn([
                "text-muted-foreground ml-auto text-sm tabular-nums",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
