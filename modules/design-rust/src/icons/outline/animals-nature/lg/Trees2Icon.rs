use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trees2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trees2Icon(props: Trees2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 26L18 38M18 26L15 23M18 26L21 23M18 26V19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 37V43H43V37",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24.6 12.5L24 13.5L29.25 4.5L37.5 20.25L34.5 21L38.25 31.5H30V38",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 31.5C22.5563 31.5 26.25 27.4706 26.25 22.5C26.25 14.1429 18 4.5 18 4.5C18 4.5 9.75 14.1429 9.75 22.5C9.75 27.4706 13.4437 31.5 18 31.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
