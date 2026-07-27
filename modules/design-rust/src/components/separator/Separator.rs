use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SeparatorOrientationType {
    #[default]
    Horizontal,
    Vertical,
}

impl SeparatorOrientationType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Horizontal => "horizontal",
            Self::Vertical => "vertical",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SeparatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub orientation: SeparatorOrientationType,
    #[props(extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Separator(props: SeparatorProps) -> Element {
    let orientation = props.orientation.as_str();

    rsx! {
        div {
            "data-slot": "separator",
            role: "separator",
            "aria-orientation": orientation,
            "data-orientation": orientation,
            class: cn([
                "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
