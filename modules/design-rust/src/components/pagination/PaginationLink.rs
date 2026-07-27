use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationLinkProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default = false)]
    pub is_active: bool,
    #[props(default)]
    pub size: Option<ButtonSizeType>,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn PaginationLink(props: PaginationLinkProps) -> Element {
    let context_size = use_context::<PaginationSizeType>();
    let size = props.size.unwrap_or_else(|| context_size.link_icon_size());
    let class = cn([
        "rounded-full font-medium",
        context_size.link_text_size(),
        props.class.as_deref().unwrap_or_default(),
    ]);

    rsx! {
        a {
            "aria-current": if props.is_active { Some("page") } else { None },
            "data-slot": "pagination-link",
            "data-active": props.is_active.then_some("true"),
            class: button_variants(
                if props.is_active {
                    ButtonVariantType::Outline
                } else {
                    ButtonVariantType::Ghost
                },
                size,
                Some(class.as_str()),
            ),
            ..props.attributes,
            {props.children}
        }
    }
}
