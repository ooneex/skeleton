use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareSliders2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareSliders2Icon(props: SquareSliders2IconProps) -> Element {
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
                x1: "14",
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
            circle {
                cx: "8.5",
                cy: "9",
                r: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "10",
                y1: "15",
                x2: "7",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "15.5",
                cy: "15",
                r: "1.5",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
