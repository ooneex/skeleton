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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 2L5 2L5 30L3 30L3 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 29.8685L8.19723 16L29 2.13149L29 29.8685Z",
                fill: "currentColor",
            }
        }
    }
}
