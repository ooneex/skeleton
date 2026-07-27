use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BreadcrumbItemSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl BreadcrumbItemSizeType {
    fn class(&self) -> &'static str {
        match self {
            Self::Xs => "gap-1",
            Self::Sm => "gap-1.5",
            Self::Md => "gap-2",
            Self::Lg => "gap-2.5",
        }
    }
}

pub fn breadcrumb_item_variants(size: BreadcrumbItemSizeType, class: &str) -> String {
    cn(["inline-flex items-center", size.class(), class])
}

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbItemProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<BreadcrumbItemSizeType>,
    #[props(extends = li, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn BreadcrumbItem(props: BreadcrumbItemProps) -> Element {
    let size = props.size.unwrap_or_default();

    rsx! {
        li {
            "data-slot": "breadcrumb-item",
            class: breadcrumb_item_variants(size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            {props.children}
        }
    }
}
