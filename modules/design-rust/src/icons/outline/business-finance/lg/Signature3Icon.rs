use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Signature3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Signature3Icon(props: Signature3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M45 32H41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 32L3 32",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 26L14 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6.00001 18L14 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23.5592 18.9903C16.6625 15.9073 17.9199 7.19523 25.1117 8.06005C31.0035 8.76858 34.8763 22.4362 33.9147 33.1416C33.1163 41.0126 26.897 41.7985 24.5647 37.0829C20.7589 28.6265 33.7903 14.0814 38.8352 16.751C41.5431 18.185 39.8375 22.9755 41.9617 23.447C42.7855 23.6299 43.3647 22.9733 44 22.313",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_linejoin: "round",
                fill: "none",
            }
        }
    }
}
