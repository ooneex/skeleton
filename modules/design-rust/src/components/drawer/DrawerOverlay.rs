use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DrawerOverlayProps {
    #[props(default = true)]
    pub open: bool,
    #[props(default = true)]
    pub blocking: bool,
    pub on_dismiss: Option<EventHandler<()>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DrawerOverlay(props: DrawerOverlayProps) -> Element {
    rsx! {
        div {
            role: "presentation",
            "data-slot": "drawer-overlay",
            "data-open": props.open.then_some(""),
            "data-closed": (!props.open).then_some(""),
            class: cn([
                "data-open:animate-in data-closed:animate-out data-closed:fill-mode-forwards data-closed:fade-out-0 data-open:fade-in-0 bg-black/30 duration-200 supports-backdrop-filter:backdrop-blur-none fixed inset-0 z-50",
                if !props.blocking { "pointer-events-none" } else { "" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            onclick: move |_| {
                if let Some(handler) = &props.on_dismiss {
                    handler.call(());
                }
            },
            ..props.attributes,
        }
    }
}
