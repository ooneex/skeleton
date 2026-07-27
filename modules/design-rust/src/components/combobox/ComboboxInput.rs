use dioxus::prelude::*;

use super::ComboboxClear::ComboboxClear;
use super::ComboboxTrigger::ComboboxTrigger;
use super::comboboxContext::ComboboxContext;
use crate::components::input::InputGroup::InputGroup;
use crate::components::input::InputGroupAddon::{InputGroupAddon, InputGroupAddonAlignType};
use crate::components::input::InputGroupInput::InputGroupInput;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxInputProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(default)]
    pub disabled: bool,
    #[props(default = true)]
    pub show_trigger: bool,
    #[props(default)]
    pub show_clear: bool,
    #[props(default)]
    pub children: Element,
}

/// Combined input + trigger/clear button, mirroring the TS `ComboboxInput`
/// which wraps `InputGroup` from the `input` folder.
#[component]
pub fn ComboboxInput(props: ComboboxInputProps) -> Element {
    let ctx = use_context::<ComboboxContext>();
    let input_val = ctx.input_value.read().clone();

    // `InputGroupInput` only exposes a `Vec<Attribute>` spread (`extends = input`),
    // so the listeners are built as attributes and forwarded through it.
    let mut input_value = ctx.input_value;
    let mut open = ctx.open;
    let on_input_value_change = ctx.on_input_value_change;
    let input_attributes = vec![
        dioxus_elements::events::oninput(move |event: Event<FormData>| {
            let val = event.value();
            input_value.set(val.clone());
            if let Some(ref cb) = on_input_value_change {
                cb.call(val);
            }
        }),
        dioxus_elements::events::onfocus(move |_: Event<FocusData>| {
            open.set(true);
        }),
    ];

    rsx! {
        InputGroup {
            class: cn(["w-auto", props.class.as_deref().unwrap_or_default()]),
            InputGroupInput {
                "data-slot": "combobox-input",
                value: "{input_val}",
                disabled: props.disabled,
                class: "hover:ring-0",
                placeholder: props.placeholder.as_deref().unwrap_or_default(),
                attributes: input_attributes,
            }
            InputGroupAddon { align: InputGroupAddonAlignType::InlineEnd,
                if props.show_trigger {
                    ComboboxTrigger {
                        class: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
                        disabled: props.disabled,
                    }
                }
                if props.show_clear {
                    ComboboxClear { disabled: props.disabled }
                }
            }
            {props.children}
        }
    }
}
