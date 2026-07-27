use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LeafIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LeafIcon(props: LeafIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.2021 25.6718L24.9976 25.9791C19.8509 33.7149 12.0094 39.2584 3 41.5303V41.5303",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.518 38.5892C18.4713 45.4074 29.3034 45.8402 35.7123 39.5559C48.9742 26.5516 42.3413 4 42.3413 4C42.3413 4 38.2099 8.24479 31.3481 9.26801C23.4368 10.4477 16.3025 9.20672 10.5321 14.865C4.12332 21.1493 4.56472 31.771 11.518 38.5892Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
