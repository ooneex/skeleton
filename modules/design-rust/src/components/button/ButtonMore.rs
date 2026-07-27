use dioxus::prelude::*;

use crate::icons::outline::ui_layout::sm::DotsVerticalIcon;
use crate::utils::cn;

use super::Button::{Button, ButtonSizeType, ButtonVariantType};

#[derive(Props, Clone, PartialEq)]
pub struct ButtonMoreProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ButtonMore(props: ButtonMoreProps) -> Element {
    rsx! {
        Button {
            size: ButtonSizeType::IconSm,
            variant: ButtonVariantType::Ghost,
            class: Some(cn(["rounded-full", props.class.as_deref().unwrap_or_default()])),
            attributes: props.attributes,
            DotsVerticalIcon { class: "size-4" }
        }
    }
}
