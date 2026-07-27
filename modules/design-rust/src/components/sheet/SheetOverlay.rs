use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct SheetOverlayProps {
    #[props(default = true)]
    pub open: bool,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SheetOverlay(props: SheetOverlayProps) -> Element {
    rsx! {
        div {
            "data-slot": "sheet-overlay",
            "data-open": props.open.then_some(""),
            "data-closed": (!props.open).then_some(""),
            class: cn([
                "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/30 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
        }
    }
}
