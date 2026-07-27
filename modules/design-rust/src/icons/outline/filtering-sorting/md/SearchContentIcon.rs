use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SearchContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SearchContentIcon(props: SearchContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "11",
                y1: "12",
                x2: "2",
                y2: "12",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "11",
                y1: "20",
                x2: "2",
                y2: "20",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22",
                y1: "28",
                x2: "2",
                y2: "28",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22",
                y1: "4",
                x2: "2",
                y2: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "21",
                cy: "16",
                r: "6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "30",
                y1: "25",
                x2: "25.243",
                y2: "20.243",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
