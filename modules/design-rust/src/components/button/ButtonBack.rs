use dioxus::prelude::*;

use crate::icons::fill::arrows::sm::ArrowTriangleLineLeftIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonBackProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Back" })]
    pub children: Element,
}

#[component]
pub fn ButtonBack(props: ButtonBackProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Outline,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            ArrowTriangleLineLeftIcon {}
            {props.children}
        }
    }
}
