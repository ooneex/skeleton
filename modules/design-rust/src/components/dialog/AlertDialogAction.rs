use dioxus::prelude::*;

use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogActionProps {
    #[props(default)]
    pub variant: ButtonVariantType,
    #[props(default)]
    pub size: ButtonSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogAction(props: AlertDialogActionProps) -> Element {
    rsx! {
        Button {
            "data-slot": "alert-dialog-action",
            variant: props.variant,
            size: props.size,
            class: cn([props.class.as_deref().unwrap_or_default()]),
            ..props.attributes,
            {props.children}
        }
    }
}
