use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretMaximize2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretMaximize2Icon(props: CaretMaximize2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 26L3 6C3 4.34315 4.34315 3 6 3L26 3C27.6569 3 29 4.34315 29 6L29 26C29 27.6569 27.6569 29 26 29L6 29C4.34315 29 3 27.6569 3 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 12.5L12.5 7.00005L6.9999 7.00005L7 12.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24.9999 12.5L19.4999 7.00005L25 7.00005L24.9999 12.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 19.5001L12.5 25L6.9999 25L7 19.5001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24.9999 19.5001L19.4999 25L25 25L24.9999 19.5001Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
