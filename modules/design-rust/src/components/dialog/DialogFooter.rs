use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::utils::cn;

use super::DialogContext::use_dialog_context;

#[derive(Props, Clone, PartialEq)]
pub struct DialogFooterProps {
    /// When `true` a "Close" button is appended to the footer.
    #[props(default = false)]
    pub show_close_button: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn DialogFooter(props: DialogFooterProps) -> Element {
    let ctx = use_dialog_context();

    rsx! {
        div {
            "data-slot": "dialog-footer",
            class: cn([
                "gap-2 flex flex-col-reverse sm:flex-row sm:justify-end",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
            if props.show_close_button {
                button {
                    "data-slot": "dialog-close",
                    r#type: "button",
                    class: button_variants(ButtonVariantType::Outline, ButtonSizeType::default(), None),
                    onclick: move |_| {
                        if let Some(c) = ctx {
                            c.dismiss.call(());
                        }
                    },
                    "Close"
                }
            }
        }
    }
}
