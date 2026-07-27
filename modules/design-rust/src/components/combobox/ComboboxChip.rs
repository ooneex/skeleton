use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::icons::outline::ui_layout::sm::XmarkIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxChipProps {
    pub value: String,
    #[props(default)]
    pub class: Option<String>,
    #[props(default = true)]
    pub show_remove: bool,
    pub children: Element,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ComboboxChip(props: ComboboxChipProps) -> Element {
    let mut ctx = use_context::<ComboboxContext>();
    let value = props.value.clone();
    rsx! {
        span {
            "data-slot": "combobox-chip",
            class: cn([
                "bg-muted text-foreground flex h-[calc(var(--spacing)*5.5)] w-fit items-center justify-center gap-1 rounded px-1.5 text-xs whitespace-nowrap has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
            if props.show_remove {
                Button {
                    "data-slot": "combobox-chip-remove",
                    variant: ButtonVariantType::Ghost,
                    size: ButtonSizeType::IconXs,
                    class: "-ml-1 opacity-50 hover:opacity-100",
                    onclick: {
                        let value = value.clone();
                        move |_| {
                            ctx.value.write().retain(|v| *v != value);
                        }
                    },
                    XmarkIcon { class: "size-3 text-primary pointer-events-none" }
                }
            }
        }
    }
}
