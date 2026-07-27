#![allow(non_snake_case)]

use dioxus::prelude::*;

use super::Command::CommandContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandListProps {
    /// Screen-reader label of the option list. Defaults to `Suggestions`,
    /// like `cmdk`.
    #[props(default)]
    pub label: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Scrollable container for command groups and items.
#[component]
pub fn CommandList(props: CommandListProps) -> Element {
    let context = use_context::<CommandContext>();

    rsx! {
        div {
            id: context.list_id(),
            "data-slot": "command-list",
            "cmdk-list": "",
            role: "listbox",
            "aria-label": props.label.as_deref().unwrap_or("Suggestions"),
            class: cn([
                "no-scrollbar max-h-72 scroll-py-1 outline-none overflow-x-hidden overflow-y-auto px-2",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
