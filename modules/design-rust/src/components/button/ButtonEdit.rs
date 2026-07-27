use dioxus::prelude::*;

use crate::icons::outline::communication::sm::PenWritingIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonEditProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Edit" })]
    pub children: Element,
}

#[component]
pub fn ButtonEdit(props: ButtonEditProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Outline,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            PenWritingIcon {}
            {props.children}
        }
    }
}
