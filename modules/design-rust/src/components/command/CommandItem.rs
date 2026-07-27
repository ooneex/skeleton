#![allow(non_snake_case)]

use dioxus::prelude::*;

use super::Command::{CommandContext, CommandItemEntryType};
use super::CommandGroup::CommandGroupContext;
use crate::icons::outline::ui_layout::sm::CheckIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandItemProps {
    /// Identity of the entry, reported to `on_select` and searched by the
    /// filter.
    pub value: String,
    /// Extra search terms beyond the value.
    #[props(default)]
    pub keywords: Vec<String>,
    /// Keeps the entry visible but unselectable.
    #[props(default = false)]
    pub disabled: bool,
    /// Renders the trailing check indicator, unless the entry has a shortcut.
    #[props(default = false)]
    pub checked: bool,
    /// Called with the value of the entry when it is clicked, or when Enter is
    /// pressed while it is highlighted.
    pub on_select: Option<EventHandler<String>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Selectable command entry with an optional checked indicator.
///
/// # Rust differences from TypeScript
/// `cmdk` derives the searched text from the rendered children when no `value`
/// is given. Children are opaque `Element`s in Dioxus, so `value` is required
/// and `keywords` carries any extra search term.
#[component]
pub fn CommandItem(props: CommandItemProps) -> Element {
    let mut context = use_context::<CommandContext>();
    let group = try_use_context::<CommandGroupContext>().map(|group| group.index);
    let index = use_hook(|| context.next_index());

    let mut text = props.value.clone();
    for keyword in &props.keywords {
        text.push(' ');
        text.push_str(keyword);
    }

    let entry = CommandItemEntryType {
        index,
        value: props.value.clone(),
        text: text.clone(),
        group,
        disabled: props.disabled,
        on_select: props.on_select,
    };

    let is_registered = context.items.peek().iter().any(|item| *item == entry);
    if !is_registered {
        context.register(entry);
    }

    let mut owner = context.clone();
    use_drop(move || owner.unregister(index));

    let is_visible = context.matches(&text);
    let is_highlighted = context.is_highlighted(&props.value);

    let disabled = props.disabled;
    let on_select = props.on_select;

    rsx! {
        if is_visible {
            div {
                id: context.item_id(index),
                "data-slot": "command-item",
                "cmdk-item": "",
                role: "option",
                "aria-selected": if is_highlighted { "true" } else { "false" },
                "aria-disabled": disabled.then_some("true"),
                "data-selected": is_highlighted.then_some("true"),
                "data-disabled": disabled.then_some("true"),
                "data-checked": props.checked.then_some("true"),
                "data-value": "{props.value}",
                class: cn([
                    "data-selected:bg-accent data-selected:text-accent-foreground data-selected:**:[svg]:text-accent-foreground relative flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm outline-hidden select-none transition-colors duration-150 [&_svg:not([class*='size-'])]:size-4 group/command-item data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                onmouseenter: {
                    let value = props.value.clone();
                    let mut context = context.clone();
                    move |_| {
                        if !disabled {
                            context.highlight(value.clone());
                        }
                    }
                },
                onclick: {
                    let value = props.value.clone();
                    let mut context = context.clone();
                    move |_| {
                        if disabled {
                            return;
                        }
                        context.highlight(value.clone());
                        if let Some(on_select) = on_select {
                            on_select.call(value.clone());
                        }
                    }
                },
                ..props.attributes,
                {props.children}
                CheckIcon { class: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" }
            }
        }
    }
}
