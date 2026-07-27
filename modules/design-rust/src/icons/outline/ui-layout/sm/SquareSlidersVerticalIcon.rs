use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareSlidersVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareSlidersVerticalIcon(props: SquareSlidersVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m21,5v14c0,1.105-.895,2-2,2H5c-1.105,0-2-.895-2-2V5c0-1.105.895-2,2-2h14c1.105,0,2,.895,2,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "9",
                y1: "11",
                x2: "9",
                y2: "7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "9",
                y1: "17",
                x2: "9",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "7",
                y1: "15",
                x2: "11",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "15",
                y1: "17",
                x2: "15",
                y2: "13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "15",
                y1: "9",
                x2: "15",
                y2: "7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "13",
                y1: "9",
                x2: "17",
                y2: "9",
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
