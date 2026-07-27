#![allow(non_snake_case)]

use dioxus::prelude::*;

use super::Command::CommandContext;
use crate::utils::cn;

/// Identifies the group an item belongs to, so the group can tell whether any
/// of its items survived the current search.
#[derive(Clone, Copy)]
pub struct CommandGroupContext {
    pub index: usize,
}

#[derive(Props, Clone, PartialEq)]
pub struct CommandGroupProps {
    /// Heading rendered above the items of the group.
    #[props(default)]
    pub heading: Option<String>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Labelled section grouping related command items. The group hides itself
/// once every one of its items has been filtered out.
#[component]
pub fn CommandGroup(props: CommandGroupProps) -> Element {
    let context = use_context::<CommandContext>();
    let index = use_hook(|| context.next_index());

    use_context_provider(|| CommandGroupContext { index });

    let heading_id = context.group_heading_id(index);
    let is_hidden = context.is_ready() && !context.has_group_matches(index);

    rsx! {
        div {
            "data-slot": "command-group",
            "cmdk-group": "",
            role: "presentation",
            hidden: is_hidden,
            class: cn([
                "text-foreground **:[[cmdk-group-heading]]:text-foreground/60 overflow-hidden px-2 py-1 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-wider",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            if let Some(heading) = props.heading.as_deref() {
                div {
                    "cmdk-group-heading": "",
                    id: "{heading_id}",
                    "aria-hidden": "true",
                    "{heading}"
                }
            }
            div {
                "cmdk-group-items": "",
                role: "group",
                "aria-labelledby": props.heading.is_some().then(|| heading_id.clone()),
                {props.children}
            }
        }
    }
}
