use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default = PaginationSizeType::Sm)]
    pub size: PaginationSizeType,
    #[props(extends = nav, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Pagination(props: PaginationProps) -> Element {
    use_context_provider(|| props.size);

    rsx! {
        nav {
            "aria-label": "pagination",
            "data-slot": "pagination",
            class: cn([
                "mx-auto flex w-full items-center justify-center",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
