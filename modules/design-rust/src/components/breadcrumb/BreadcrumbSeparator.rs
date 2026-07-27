use dioxus::prelude::*;

use crate::icons::outline::arrows::sm::ChevronRightIcon;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BreadcrumbSeparatorSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl BreadcrumbSeparatorSizeType {
    fn class(&self) -> &'static str {
        match self {
            Self::Xs => "[&>svg]:size-2.5",
            Self::Sm => "[&>svg]:size-3",
            Self::Md => "[&>svg]:size-3.5",
            Self::Lg => "[&>svg]:size-4",
        }
    }
}

pub fn breadcrumb_separator_variants(size: BreadcrumbSeparatorSizeType, class: &str) -> String {
    cn([size.class(), class])
}

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbSeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<BreadcrumbSeparatorSizeType>,
    #[props(extends = li, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    /// Custom separator content. Renders `ChevronRightIcon` when not provided.
    #[props(default)]
    pub children: Option<Element>,
}

#[component]
pub fn BreadcrumbSeparator(props: BreadcrumbSeparatorProps) -> Element {
    let size = props.size.unwrap_or_default();

    rsx! {
        li {
            "data-slot": "breadcrumb-separator",
            role: "presentation",
            "aria-hidden": "true",
            class: breadcrumb_separator_variants(size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            if let Some(children) = props.children {
                {children}
            } else {
                ChevronRightIcon {}
            }
        }
    }
}
