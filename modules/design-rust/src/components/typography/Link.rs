use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum LinkSizeType {
    Xs,
    #[default]
    Sm,
    Md,
    Lg,
}

impl LinkSizeType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Xs => "text-xs",
            Self::Sm => "text-sm",
            Self::Md => "text-base",
            Self::Lg => "text-lg",
        }
    }
}

pub fn link_variants(size: LinkSizeType, class: Option<&str>) -> String {
    cn([
        "text-primary-600 no-underline font-medium hover:underline",
        size.class(),
        class.unwrap_or_default(),
    ])
}

#[derive(Props, Clone, PartialEq)]
pub struct LinkProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: LinkSizeType,
    #[props(extends = a, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn Link(props: LinkProps) -> Element {
    rsx! {
        a {
            class: link_variants(props.size, props.class.as_deref()),
            ..props.attributes,
            {props.children}
        }
    }
}
