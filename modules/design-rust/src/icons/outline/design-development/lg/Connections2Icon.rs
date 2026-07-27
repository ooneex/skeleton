use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Connections2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Connections2Icon(props: Connections2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M20.2635 23.9999L12.1317 15.8682L4 23.9999L12.1317 32.1316L20.2635 23.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44 23.9999L35.8683 15.8682L27.7365 23.9999L35.8683 32.1316L44 23.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M32.1317 35.8683L24 27.7366L15.8683 35.8683L24 44L32.1317 35.8683Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.1317 12.1316L24 3.99988L15.8683 12.1316L24 20.2633L32.1317 12.1316Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
