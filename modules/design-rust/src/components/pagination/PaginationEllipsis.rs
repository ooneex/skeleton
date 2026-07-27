use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::icons::outline::editing::sm::DotsIcon;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationEllipsisProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaginationEllipsis(props: PaginationEllipsisProps) -> Element {
    let size = use_context::<PaginationSizeType>();

    rsx! {
        span {
            "aria-hidden": "true",
            "data-slot": "pagination-ellipsis",
            class: cn([
                "flex items-center justify-center [&_svg:not([class*='size-'])]:size-5",
                size.ellipsis_size(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            DotsIcon { class: "size-5" }
        }
    }
}
