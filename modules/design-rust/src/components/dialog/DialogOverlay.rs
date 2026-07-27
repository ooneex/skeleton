use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct DialogOverlayProps {
    /// Whether the dialog is currently open — drives `data-open` / `data-closed`
    /// and the enter / exit animations.
    #[props(default = true)]
    pub open: bool,
    /// When `false` pointer events pass through to the page underneath.
    #[props(default = true)]
    pub blocking: bool,
    /// Called when a click lands on the overlay itself (not the dialog panel).
    /// Mirrors the React `onDismiss` callback.
    pub on_dismiss: Option<EventHandler<()>>,
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DialogOverlay(props: DialogOverlayProps) -> Element {
    rsx! {
        div {
            role: "presentation",
            "data-slot": "dialog-overlay",
            "data-open": props.open.then_some(""),
            "data-closed": (!props.open).then_some(""),
            class: cn([
                "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
                if !props.blocking { "pointer-events-none" } else { "" },
                props.class.as_deref().unwrap_or_default(),
            ]),
            onclick: move |_| {
                if let Some(on_dismiss) = &props.on_dismiss {
                    on_dismiss.call(());
                }
            },
            ..props.attributes,
        }
    }
}
