use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};

#[derive(Props, Clone, PartialEq)]
pub struct AlertDialogActionProps {
    #[props(default)]
    pub variant: ButtonVariantType,
    #[props(default)]
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
pub fn AlertDialogAction(props: AlertDialogActionProps) -> Element {
    rsx! {
        button {
            "data-slot": "alert-dialog-action",
            class: button_variants(props.variant, props.size, props.class.as_deref()),
            onclick: move |e| {
                if let Some(h) = &props.on_click {
                    h.call(e);
                }
            },
            ..props.attributes,
            {props.children}
        }
    }
}
