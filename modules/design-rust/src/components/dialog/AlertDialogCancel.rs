use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};

use super::DialogContext::use_dialog_context;

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogCancelProps {
    #[props(default = ButtonVariantType::Outline)]
    pub variant: ButtonVariantType,
    #[props(default = ButtonSizeType::Sm)]
    pub size: ButtonSizeType,
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub on_click: Option<EventHandler<MouseEvent>>,
    #[props(extends = button, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn AlertDialogCancel(props: AlertDialogCancelProps) -> Element {
    let ctx = use_dialog_context();

    rsx! {
        button {
            "data-slot": "alert-dialog-cancel",
            class: button_variants(props.variant, props.size, props.class.as_deref()),
            onclick: move |e| {
                if let Some(h) = &props.on_click {
                    h.call(e);
                }
                if let Some(c) = ctx {
                    c.dismiss.call(());
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
