#![allow(non_snake_case)]

use dioxus::prelude::*;

use super::Command::CommandContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandEmptyProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Placeholder shown when no command matches the current search.
///
/// # Rust differences from TypeScript
/// Items register themselves with the root while they render, and a component
/// cannot see registrations made after its own render. The placeholder
/// therefore waits for the first render to settle (`ready` on the command
/// context) before it appears, which also keeps it out of server-rendered
/// markup.
#[component]
pub fn CommandEmpty(props: CommandEmptyProps) -> Element {
    let context = use_context::<CommandContext>();
    let is_visible = context.is_ready() && context.is_empty();

    rsx! {
        if is_visible {
            div {
                "data-slot": "command-empty",
                "cmdk-empty": "",
                role: "presentation",
                class: cn([
                    "py-8 text-center text-sm text-muted-foreground",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
            }
        }
    }
}
