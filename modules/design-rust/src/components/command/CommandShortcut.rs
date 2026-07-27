#![allow(non_snake_case)]

use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandShortcutProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Right-aligned keyboard hint displayed inside a command item.
#[component]
pub fn CommandShortcut(props: CommandShortcutProps) -> Element {
    rsx! {
        span {
            "data-slot": "command-shortcut",
            class: cn([
                "text-muted-foreground group-data-selected/command-item:text-accent-foreground ml-auto text-xs tracking-wide shrink-0",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
