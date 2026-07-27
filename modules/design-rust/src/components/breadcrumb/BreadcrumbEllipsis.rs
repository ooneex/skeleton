use dioxus::prelude::*;

use crate::icons::outline::editing::sm::DotsIcon;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum BreadcrumbEllipsisSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl BreadcrumbEllipsisSizeType {
    fn class(&self) -> &'static str {
        match self {
            Self::Xs => "size-4 [&>svg]:size-3.5",
            Self::Sm => "size-5 [&>svg]:size-4",
            Self::Md => "size-6 [&>svg]:size-5",
            Self::Lg => "size-7 [&>svg]:size-5.5",
        }
    }
}

pub fn breadcrumb_ellipsis_variants(size: BreadcrumbEllipsisSizeType, class: &str) -> String {
    cn(["flex items-center justify-center", size.class(), class])
}

#[derive(Props, Clone, PartialEq)]
pub struct BreadcrumbEllipsisProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<BreadcrumbEllipsisSizeType>,
    #[props(extends = span, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BreadcrumbEllipsis(props: BreadcrumbEllipsisProps) -> Element {
    let size = props.size.unwrap_or_default();

    rsx! {
        span {
            "data-slot": "breadcrumb-ellipsis",
            role: "presentation",
            "aria-hidden": "true",
            class: breadcrumb_ellipsis_variants(size, props.class.as_deref().unwrap_or_default()),
            ..props.attributes,
            DotsIcon {}
            span { class: "sr-only", "More" }
        }
    }
}
