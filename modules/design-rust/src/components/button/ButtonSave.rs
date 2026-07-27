use dioxus::prelude::*;

use crate::icons::outline::files_folders::sm::FloppyDiskIcon;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonSaveProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    #[props(default = rsx! { "Save" })]
    pub children: Element,
}

#[component]
pub fn ButtonSave(props: ButtonSaveProps) -> Element {
    rsx! {
        Button {
            variant: ButtonVariantType::Default,
            size: props.size,
            class: props.class,
            attributes: props.attributes,
            FloppyDiskIcon {}
            {props.children}
        }
    }
}
