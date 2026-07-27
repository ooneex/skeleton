#![allow(non_snake_case)]

use dioxus::prelude::*;

use super::Command::CommandContext;
use crate::components::input::InputGroup::InputGroup;
use crate::components::input::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use crate::icons::outline::filtering_sorting::sm::MagnifierIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct CommandInputProps {
    /// Controlled query. When set, the field mirrors it and reports every
    /// keystroke through `on_value_change` instead of storing it itself.
    #[props(default)]
    pub value: Option<String>,
    /// Called with the new query on every keystroke.
    pub on_value_change: Option<EventHandler<String>>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default = false)]
    pub autofocus: bool,
    #[props(default = false)]
    pub disabled: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Search field for the command palette with an inline magnifier addon. Every
/// keystroke updates the query shared through the command context, which is
/// what filters the items.
#[component]
pub fn CommandInput(props: CommandInputProps) -> Element {
    let mut context = use_context::<CommandContext>();

    let initial = props.value.clone();
    use_hook(|| {
        let mut context = context.clone();

        if let Some(initial) = initial {
            context.set_search(initial);
        }
    });

    let controlled = props.value.clone();
    let mut mirror = context.clone();
    use_effect(use_reactive!(|(controlled,)| {
        if let Some(controlled) = controlled {
            mirror.set_search(controlled);
        }
    }));

    let is_controlled = props.value.is_some();
    let on_value_change = props.on_value_change;

    let search = context.search.read().clone();
    let active_item_id = context.active_item_id();

    rsx! {
        div { "data-slot": "command-input-wrapper", class: "px-4 py-3.5",
            InputGroup { class: "border-none",
                input {
                    id: context.input_id(),
                    "data-slot": "command-input",
                    "cmdk-input": "",
                    r#type: "text",
                    role: "combobox",
                    autocomplete: "off",
                    "autocorrect": "off",
                    spellcheck: false,
                    "aria-autocomplete": "list",
                    "aria-expanded": "true",
                    "aria-controls": context.list_id(),
                    "aria-activedescendant": active_item_id,
                    autofocus: props.autofocus,
                    disabled: props.disabled,
                    placeholder: props.placeholder.clone().unwrap_or_default(),
                    value: "{search}",
                    class: cn([
                        "p-0 w-full text-base outline-hidden disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-muted-foreground/60",
                        props.class.as_deref().unwrap_or_default(),
                    ]),
                    oninput: move |event: FormEvent| {
                        let value = event.value();
                        if !is_controlled {
                            context.set_search(value.clone());
                        }
                        if let Some(on_value_change) = on_value_change {
                            on_value_change.call(value);
                        }
                    },
                    ..props.attributes,
                }
                InputGroupAddon {
                    align: InputGroupAddonAlignType::InlineStart,
                    class: "p-0",
                    MagnifierIcon { class: "size-5 text-foreground/40" }
                }
            }
        }
    }
}
