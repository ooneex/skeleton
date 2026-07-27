use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Volume2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Volume2Icon(props: Volume2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                points: "20,29 9,21 1,21 1,11 9,11 20,3",
                stroke_linejoin: "miter",
            }
            line {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                x1: "27",
                y1: "16",
                x2: "31",
                y2: "16",
                stroke_linejoin: "miter",
            }
            line {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                x1: "25.3",
                y1: "9.5",
                x2: "28.7",
                y2: "7.5",
                stroke_linejoin: "miter",
            }
            line {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                x1: "25.3",
                y1: "22.5",
                x2: "28.7",
                y2: "24.5",
                stroke_linejoin: "miter",
            }
        }
    }
}
