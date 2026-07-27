use dioxus::prelude::*;

use crate::utils::cn;

#[derive(Props, Clone, PartialEq)]
pub struct ProgressTrackProps {
    #[props(default)]
    pub class: Option<String>,
    #[props(extends = div, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
    pub children: Element,
}

#[component]
pub fn ProgressTrack(props: ProgressTrackProps) -> Element {
    rsx! {
        div {
            "data-slot": "progress-track",
            class: cn([
                "bg-muted h-1.5 rounded-full relative flex w-full items-center overflow-x-hidden",
                props.class.as_deref().unwrap_or_default(),
            ]),
            ..props.attributes,
            {props.children}
        }
    }
}
