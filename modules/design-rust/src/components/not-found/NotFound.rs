use dioxus::document::eval;
use dioxus::prelude::*;

use super::NotFoundIcon;
use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::components::typography::{H1, Muted};
use crate::icons::fill::arrows::sm::ArrowTriangleLineLeftIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct NotFoundProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotFound(props: NotFoundProps) -> Element {
    rsx! {
        div {
            "data-slot": "not-found",
            class: cn([
                "flex flex-col items-center justify-center h-full gap-6 p-12",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            NotFoundIcon {}
            div { class: "flex flex-col items-center gap-2 text-center",
                H1 { "404" }
                Muted { class: "max-w-sm", "The page you are looking for doesn't exist or has been moved." }
            }
            div { class: "flex gap-3",
                button {
                    "data-slot": "button",
                    type: "button",
                    class: button_variants(ButtonVariantType::Outline, ButtonSizeType::Sm, None),
                    onclick: move |_| {
                        let _ = eval("window.history.back()");
                    },
                    ArrowTriangleLineLeftIcon {}
                    "Go back"
                }
                a {
                    href: "/",
                    class: button_variants(ButtonVariantType::Default, ButtonSizeType::Sm, None),
                    "Go home"
                }
            }
        }
    }
}
