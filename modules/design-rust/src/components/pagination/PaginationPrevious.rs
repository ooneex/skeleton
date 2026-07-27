use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::components::button::{ButtonVariantType, button_variants};
use crate::icons::outline::arrows::lg::ChevronLeftIcon as ChevronLeftIconLg;
use crate::icons::outline::arrows::md::ChevronLeftIcon as ChevronLeftIconMd;
use crate::icons::outline::arrows::sm::ChevronLeftIcon as ChevronLeftIconSm;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationPreviousProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaginationPrevious(props: PaginationPreviousProps) -> Element {
    let size = use_context::<PaginationSizeType>();
    let class = cn(["rounded-full", props.class.as_deref().unwrap_or_default()]);
    let chevron_class = size.chevron_icon_size_class();

    rsx! {
        a {
            "aria-label": "Go to previous page",
            "data-slot": "pagination-previous",
            class: button_variants(ButtonVariantType::Ghost, size.link_icon_size(), Some(class.as_str())),
            ..props.attributes,
            match size {
                PaginationSizeType::Xs | PaginationSizeType::Sm => rsx! {
                    ChevronLeftIconSm { class: chevron_class, "data-icon": "inline-start" }
                },
                PaginationSizeType::Md => rsx! {
                    ChevronLeftIconMd { class: chevron_class, "data-icon": "inline-start" }
                },
                PaginationSizeType::Lg => rsx! {
                    ChevronLeftIconLg { class: chevron_class, "data-icon": "inline-start" }
                },
            }
        }
    }
}
