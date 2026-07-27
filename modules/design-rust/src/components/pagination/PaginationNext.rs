use dioxus::prelude::*;

use super::paginationContext::PaginationSizeType;
use crate::components::button::{ButtonVariantType, button_variants};
use crate::icons::outline::arrows::lg::ChevronRightIcon as ChevronRightIconLg;
use crate::icons::outline::arrows::md::ChevronRightIcon as ChevronRightIconMd;
use crate::icons::outline::arrows::sm::ChevronRightIcon as ChevronRightIconSm;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct PaginationNextProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaginationNext(props: PaginationNextProps) -> Element {
    let size = use_context::<PaginationSizeType>();
    let class = cn(["rounded-full", props.class.as_deref().unwrap_or_default()]);
    let chevron_class = size.chevron_icon_size_class();

    rsx! {
        a {
            "aria-label": "Go to next page",
            "data-slot": "pagination-next",
            class: button_variants(ButtonVariantType::Ghost, size.link_icon_size(), Some(class.as_str())),
            ..props.attributes,
            match size {
                PaginationSizeType::Xs | PaginationSizeType::Sm => rsx! {
                    ChevronRightIconSm { class: chevron_class, "data-icon": "inline-end" }
                },
                PaginationSizeType::Md => rsx! {
                    ChevronRightIconMd { class: chevron_class, "data-icon": "inline-end" }
                },
                PaginationSizeType::Lg => rsx! {
                    ChevronRightIconLg { class: chevron_class, "data-icon": "inline-end" }
                },
            }
        }
    }
}
