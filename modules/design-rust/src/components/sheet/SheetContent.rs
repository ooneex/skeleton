use dioxus::prelude::*;

use crate::components::button::{ButtonSizeType, ButtonVariantType, button_variants};
use crate::icons::outline::ui_layout::sm::XmarkIcon;
use crate::utils::cn;

use super::SheetOverlay::SheetOverlay;
use super::SheetPortal::SheetPortal;

/// Which edge the sheet slides in from.
#[derive(Clone, Copy, PartialEq, Eq, Default)]
pub enum SheetSideType {
    #[default]
    Right,
    Left,
    Top,
    Bottom,
}

impl SheetSideType {
    pub fn as_str(&self) -> &'static str {
        match self {
            Self::Right => "right",
            Self::Left => "left",
            Self::Top => "top",
            Self::Bottom => "bottom",
        }
    }
}

#[derive(Props, Clone, PartialEq)]
pub struct SheetContentProps {
    /// Edge the sheet slides in from. Defaults to `Right`.
    #[props(default)]
    pub side: SheetSideType,
    #[props(default = true)]
    pub open: bool,
    /// Show the close button in the top-right corner.
    #[props(default = true)]
    pub show_close_button: bool,
    /// Called when the sheet is dismissed.
    pub on_dismiss: Option<EventHandler<()>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn SheetContent(props: SheetContentProps) -> Element {
    let side = props.side.as_str();
    let on_dismiss = props.on_dismiss;

    rsx! {
        SheetPortal {
            SheetOverlay { open: props.open }
            div {
                "data-slot": "sheet-content",
                "data-side": side,
                "data-open": props.open.then_some(""),
                "data-closed": (!props.open).then_some(""),
                class: cn([
                    "bg-background data-open:animate-in data-closed:animate-out data-[side=right]:data-closed:slide-out-to-right-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=top]:data-closed:slide-out-to-top-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:fade-out-0 data-open:fade-in-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=bottom]:data-open:slide-in-from-bottom-10 fixed z-50 flex flex-col gap-4 bg-clip-padding text-sm transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
                    props.class.as_deref().unwrap_or_default(),
                ]),
                ..props.attributes,
                {props.children}
                if props.show_close_button {
                    button {
                        "data-slot": "sheet-close",
                        r#type: "button",
                        class: button_variants(ButtonVariantType::Ghost, ButtonSizeType::IconSm, Some("absolute top-4 right-4")),
                        onclick: move |_| {
                            if let Some(h) = &on_dismiss {
                                h.call(());
                            }
                        },
                        XmarkIcon { class: "size-4" }
                        span { class: "sr-only", "Close" }
                    }
                }
            }
        }
    }
}
