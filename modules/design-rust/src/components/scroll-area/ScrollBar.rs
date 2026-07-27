use dioxus::prelude::*;

use crate::utils::cn;

/// Orientation of the scrollbar track.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ScrollOrientationType {
    #[default]
    Vertical,
    Horizontal,
}

impl ScrollOrientationType {
    pub fn as_str(self) -> &'static str {
        match self {
            Self::Vertical => "vertical",
            Self::Horizontal => "horizontal",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct ScrollBarProps {
    /// Track orientation; defaults to `vertical`.
    #[props(default)]
    pub orientation: ScrollOrientationType,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Styled scrollbar track and thumb, matching the base-ui ScrollArea.Scrollbar markup.
#[component]
pub fn ScrollBar(props: ScrollBarProps) -> Element {
    rsx! {
        div {
            "data-slot": "scroll-area-scrollbar",
            "data-orientation": props.orientation.as_str(),
            class: cn([
                "z-20 data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            div {
                "data-slot": "scroll-area-thumb",
                class: "rounded-full bg-primary relative flex-1",
            }
        }
    }
}
