use dioxus::prelude::*;

use crate::icons::outline::ui_layout::sm::TrashIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonDeleteProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Delete" })]
    pub children: Element,
}

#[component]
pub fn ButtonDelete(props: ButtonDeleteProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Destructive,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            TrashIcon {}
            {props.children}
        }
    }
}
