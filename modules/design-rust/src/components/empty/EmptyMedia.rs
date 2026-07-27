use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum EmptyMediaVariantType {
    #[default]
    Default,
    Icon,
}

impl EmptyMediaVariantType {
    pub fn class(&self) -> &'static str {
        match self {
            Self::Default => "bg-transparent",
            Self::Icon => {
                "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded [&_svg:not([class*='size-'])]:size-6"
            }
        }
    }

    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Default => "default",
            Self::Icon => "icon",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct EmptyMediaProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub variant: EmptyMediaVariantType,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn EmptyMedia(props: EmptyMediaProps) -> Element {
    rsx! {
        div {
            "data-slot": "empty-icon",
            "data-variant": props.variant.as_str(),
            class: cn([
                "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
                props.variant.class(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
