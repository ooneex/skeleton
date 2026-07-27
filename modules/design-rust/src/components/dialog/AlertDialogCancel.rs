use dioxus::prelude::*;

use crate::components::button::{Button, ButtonSizeType, ButtonVariantType};
use crate::utils::cn;

use super::DialogContext::use_dialog_context;

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogCancelProps {
    #[props(default = ButtonVariantType::Outline)]
    pub variant: ButtonVariantType,
    #[props(default = ButtonSizeType::Sm)]
    pub size: ButtonSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogCancel(props: AlertDialogCancelProps) -> Element {
    let ctx = use_dialog_context();

    rsx! {
        Button {
            "data-slot": "alert-dialog-cancel",
            variant: props.variant,
            size: props.size,
            class: cn([props.class.as_deref().unwrap_or_default()]),
            onclick: move |_| {
                if let Some(c) = ctx {
                    c.dismiss.call(());
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
