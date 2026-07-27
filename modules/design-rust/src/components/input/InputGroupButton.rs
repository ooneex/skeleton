use dioxus::prelude::*;

use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum InputGroupButtonAlignType {
    #[default]
    InlineEnd,
    InlineStart,
}

impl InputGroupButtonAlignType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::InlineEnd => "inline-end",
            Self::InlineStart => "inline-start",
        }
    }

    pub fn class(self) -> &'static str {
        match self {
            Self::InlineEnd => "order-last",
            Self::InlineStart => "order-first",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct InputGroupButtonProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub align: InputGroupButtonAlignType,
    #[props(default)]
    pub variant: ButtonVariantType,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(default)]
    pub disabled: bool,
    pub children: Element,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputGroupButton(props: InputGroupButtonProps) -> Element {
    let class = cn([
        "shrink-0",
        props.align.class(),
        props.class.as_deref().unwrap_or_default(),
    ]);

    rsx! {
        Button {
            "data-slot": "input-group-button",
            "data-align": props.align.as_str(),
            class: class,
            variant: props.variant,
            size: props.size,
            disabled: props.disabled,
            attributes: props.attributes,
            {props.children}
        }
    }
}
