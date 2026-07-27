use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct KbdGroupProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn KbdGroup(props: KbdGroupProps) -> Element {
    rsx! {
        kbd {
            "data-slot": "kbd-group",
            class: cn(["gap-1 inline-flex items-center", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
