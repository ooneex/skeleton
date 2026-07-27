use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::icons::outline::ui_layout::sm::XmarkIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxClearProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub disabled: bool,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxClear(props: ComboboxClearProps) -> Element {
    let mut ctx = use_context::<ComboboxContext>();
    rsx! {
        Button {
            "data-slot": "combobox-clear",
            variant: ButtonVariantType::Ghost,
            size: ButtonSizeType::IconXs,
            disabled: props.disabled || ctx.disabled,
            class: cn([props.class.as_deref().unwrap_or_default()]),
            onclick: move |_| {
                ctx.value.write().clear();
                ctx.input_value.set(String::new());
            },
            attributes: props.attributes,
            XmarkIcon { class: "size-3 text-primary pointer-events-none" }
        }
    }
}
