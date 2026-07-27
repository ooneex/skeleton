use dioxus::prelude::*;

use crate::icons::outline::ui_layout::sm::XmarkIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonCancelProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Cancel" })]
    pub children: Element,
}

#[component]
pub fn ButtonCancel(props: ButtonCancelProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Ghost,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            XmarkIcon {}
            {props.children}
        }
    }
}
