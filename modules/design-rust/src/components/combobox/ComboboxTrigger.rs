use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::icons::outline::arrows::sm::ChevronDownIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxTriggerProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub disabled: bool,
    pub children: Element,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Toggles the combobox popup open/closed. A `ChevronDownIcon` is appended
/// automatically, matching the TS original.
#[component]
pub fn ComboboxTrigger(props: ComboboxTriggerProps) -> Element {
    let mut ctx = use_context::<ComboboxContext>();
    rsx! {
        button {
            r#type: "button",
            "data-slot": "combobox-trigger",
            disabled: props.disabled || ctx.disabled,
            class: cn([
                "[&_svg:not([class*='size-'])]:size-3 [[data-slot=input-group]:has(&:focus-visible)]:border-ring-active",
                props.class.as_deref().unwrap_or_default(),
            ]),
            onclick: move |_| {
                let is_open = *ctx.open.read();
                ctx.open.set(!is_open);
            },
            ..props.attributes,
            {props.children}
            ChevronDownIcon { class: "size-3 text-primary pointer-events-none" }
        }
    }
}
