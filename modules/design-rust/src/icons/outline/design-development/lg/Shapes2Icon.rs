use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shapes2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shapes2Icon(props: Shapes2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M37 25C41.9706 25 46 20.9706 46 16C46 11.0294 41.9706 7 37 7C32.0294 7 28 11.0294 28 16C28 20.9706 32.0294 25 37 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25 29H13C11.8954 29 11 29.8954 11 31V43C11 44.1046 11.8954 45 13 45H25C26.1046 45 27 44.1046 27 43V31C27 29.8954 26.1046 29 25 29Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 21L13 6L22 21H4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
