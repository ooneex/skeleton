use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = ul, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn PaginationContent(props: PaginationContentProps) -> Element {
    let size = use_context::<PaginationSizeType>();

    rsx! {
        ul {
            "data-slot": "pagination-content",
            class: cn([
                "flex items-center",
                size.content_gap(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
