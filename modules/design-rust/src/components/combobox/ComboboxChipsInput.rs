use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxChipsInputProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub placeholder: Option<String>,
    #[props(extends = input, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Text input inside a [`ComboboxChips`] container. Drives `input_value` in
/// context and fires `on_input_value_change`.
#[component]
pub fn ComboboxChipsInput(props: ComboboxChipsInputProps) -> Element {
    let mut ctx = use_context::<ComboboxContext>();
    let input_value = ctx.input_value.read().clone();
    rsx! {
        input {
            r#type: "text",
            "data-slot": "combobox-chip-input",
            value: "{input_value}",
            class: cn([
                "min-w-16 flex-1 outline-none hover:ring-0 placeholder:text-muted-foreground/60 bg-transparent border-none",
                props.class.as_deref().unwrap_or_default(),
            ]),
            oninput: move |event| {
                let val = event.value();
                ctx.input_value.set(val.clone());
                if let Some(ref cb) = ctx.on_input_value_change {
                    cb.call(val);
                }
            },
            ..props.attributes,
        }
    }
}
