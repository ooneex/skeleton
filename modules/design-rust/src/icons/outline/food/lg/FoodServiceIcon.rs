use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FoodServiceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FoodServiceIcon(props: FoodServiceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M31 2V4V3.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M43 17V16C43 9.37258 37.6274 4 31 4C24.3726 4 19 9.37258 19 16V17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.1869 39.4614L10 39.4039L21.8385 41.5992C23.2533 41.8615 24.7126 41.7375 26.0628 41.24L41.8811 35.4122C42.5534 35.1645 43 34.5241 43 33.8076V33.8076C43 32.826 42.1753 32.0458 41.1951 32.1003L34 32.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20.5 35L29 35L29 33.5C29 31.2909 27.2091 29.5 25 29.5L22 29.5L21.1957 28.8298C19.777 27.6475 17.9886 27 16.1418 27V27C14.2746 27 12.4678 27.6618 11.0424 28.8679L10 29.75L10.1869 29.563",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 25L10 43L5 43L5 25L10 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M31 10C28.6213 10 26.5196 11.1865 25.2547 13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M45 22H17V17H45V22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
