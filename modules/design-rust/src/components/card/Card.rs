use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum CardSizeType {
    #[default]
    Default,
    Sm,
}

impl CardSizeType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Default => "default",
            Self::Sm => "sm",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct CardProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub size: Option<CardSizeType>,
    #[props(default = false)]
    pub hoverable: bool,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

/// Card compound component.
///
/// Use the attached sub-components: `Card.Header`, `Card.Title`,
/// `Card.Description`, `Card.Action`, `Card.Content`, `Card.Footer`.
#[component]
pub fn Card(props: CardProps) -> Element {
    let size = props.size.unwrap_or_default();

    rsx! {
        div {
            "data-slot": "card",
            "data-size": size.as_str(),
            class: cn([
                "bg-card text-card-foreground gap-4 overflow-hidden rounded p-4 text-sm has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 group/card flex flex-col ring-[0.4px] ring-ring border-none",
                if props.hoverable { "hover:ring-ring-active cursor-pointer" } else { "" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
