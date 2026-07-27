use dioxus::prelude::*;

use super::Progress::ProgressContext;
use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressIndicatorProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ProgressIndicator(props: ProgressIndicatorProps) -> Element {
    let ctx = use_context::<ProgressContext>();
    let width_style = ctx
        .fraction()
        .map(|f| format!("width: {}%", f * 100.0))
        .unwrap_or_default();

    rsx! {
        div {
            "data-slot": "progress-indicator",
            class: cn([
                "bg-primary h-full transition-[width] duration-500 ease-in-out",
                props.class.as_deref().unwrap_or_default(),
            ]),
            style: width_style,
            ..props.attributes,
        }
    }
}
