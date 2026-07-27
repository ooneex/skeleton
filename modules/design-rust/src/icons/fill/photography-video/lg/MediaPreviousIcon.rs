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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 44L9.00001 4L6.00001 4L6 44L9 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 5.15137L13.1727 24L42 42.8486L42 5.15137Z",
                fill: "currentColor",
            }
        }
    }
}
