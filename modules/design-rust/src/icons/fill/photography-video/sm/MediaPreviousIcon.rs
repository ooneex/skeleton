use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaPreviousIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaPreviousIcon(props: MediaPreviousIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 22L5 2L3 2L3 22L5 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 21.8685L6.19722 12L21 2.1315L21 21.8685Z",
                fill: "currentColor",
            }
        }
    }
}
