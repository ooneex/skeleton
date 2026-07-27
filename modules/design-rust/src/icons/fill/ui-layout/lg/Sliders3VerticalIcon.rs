use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders3VerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders3VerticalIcon(props: Sliders3VerticalIconProps) -> Element {
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
                d: "M25.5 4L25.5 9L22.5 9L22.5 4L25.5 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 18.5L25.5 44H22.5L22.5 18.5L25.5 18.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39.5 33.5L39.5 44L36.5 44L36.5 33.5L39.5 33.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 33.5L11.5 44L8.5 44L8.5 33.5L11.5 33.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M39.5 4L39.5 24L36.5 24L36.5 4L39.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.5 4L11.5 24L8.5 24L8.5 4L11.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 36L3 27L17 27L17 36L3 36Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 36L31 27L45 27L45 36L31 36Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 21L17 12L31 12L31 21L17 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
