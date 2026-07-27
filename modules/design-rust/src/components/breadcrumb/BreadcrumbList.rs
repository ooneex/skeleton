use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BreadcrumbListSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl BreadcrumbListSizeType {
    fn class(&self) -> &'static str {
        match self {
            Self::Xs => "gap-1 text-xs sm:gap-2",
            Self::Sm => "gap-1.5 text-sm sm:gap-2.5",
            Self::Md => "gap-2 text-base sm:gap-3",
            Self::Lg => "gap-2.5 text-lg sm:gap-3.5",
        }
    }
}

pub fn breadcrumb_list_variants(size: BreadcrumbListSizeType, class: &str) -> String {
    cn([
        "text-muted-foreground flex flex-wrap items-center wrap-break-word leading-relaxed",
        size.class(),
        class,
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbListProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<BreadcrumbListSizeType>,
    #[props(extends = ol, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn BreadcrumbList(props: BreadcrumbListProps) -> Element {
    let size = props.size.unwrap_or_default();

    rsx! {
        ol {
            "data-slot": "breadcrumb-list",
            class: breadcrumb_list_variants(size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            {props.children}
        }
    }
}
