use dioxus::prelude::*;

use super::comboboxContext::ComboboxContext;
use crate::components::scroll_area::ScrollArea;
use crate::utils::cn;

#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum ComboboxContentAlignType {
    #[default]
    Start,
    Center,
    End,
}

impl ComboboxContentAlignType {
    pub fn position_class(self) -> &'static str {
        match self {
            Self::Start => "left-0",
            Self::Center => "left-1/2 -translate-x-1/2",
            Self::End => "right-0",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct ComboboxContentProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(default)]
    pub align: ComboboxContentAlignType,
    #[props(default = 6.0)]
    pub side_offset: f64,
    pub children: Element,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

/// Popup panel rendered as `position: absolute; z-50` relative to the combobox
/// root. No DOM portal — uses absolute positioning in the same stacking context.
///
/// **Gap**: The original uses `@base-ui/react` Portal + Positioner for viewport
/// overflow detection. This Rust port uses simple absolute positioning instead.
#[component]
pub fn ComboboxContent(props: ComboboxContentProps) -> Element {
    let ctx = use_context::<ComboboxContext>();
    let open = *ctx.open.read();

    if !open {
        return rsx! {};
    }

    rsx! {
        div {
            "data-slot": "combobox-content",
            class: cn([
                "bg-popover text-popover-foreground flex flex-col gap-4 rounded text-sm shadow-none ring ring-ring-active p-1 z-50 outline-hidden absolute top-full mt-1.5 min-w-full",
                props.align.position_class(),
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            ScrollArea { viewport_class: "h-auto max-h-72",
                {props.children}
            }
        }
    }
}
