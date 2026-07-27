use dioxus::prelude::*;

use crate::icons::fill::arrows::sm::ArrowTriangleLineRightIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonNextProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Next" })]
    pub children: Element,
}

#[component]
pub fn ButtonNext(props: ButtonNextProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Default,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            {props.children}
            ArrowTriangleLineRightIcon { "data-icon": "inline-end" }
        }
    }
}
