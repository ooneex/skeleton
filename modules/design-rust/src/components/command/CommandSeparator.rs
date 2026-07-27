#![allow(non_snake_case)]

use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Thin divider between command groups.
#[component]
pub fn CommandSeparator(props: CommandSeparatorProps) -> Element {
    rsx! {
        div {
            "data-slot": "command-separator",
            "cmdk-separator": "",
            role: "separator",
            class: cn(["bg-border/50 mx-2 h-px w-auto", props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
        }
    }
}
