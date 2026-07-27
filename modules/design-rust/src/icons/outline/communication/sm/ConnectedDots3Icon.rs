use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDots3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDots3Icon(props: ConnectedDots3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                "data-cap": "butt",
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                x1: "7.6",
                y1: "10.5",
                x2: "16.4",
                y2: "5.5",
                stroke_linejoin: "miter",
                stroke_linecap: "butt",
            }
            line {
                "data-cap": "butt",
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                x1: "7.6",
                y1: "13.5",
                x2: "16.4",
                y2: "18.5",
                stroke_linejoin: "miter",
                stroke_linecap: "butt",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "5",
                cy: "12",
                r: "3",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "19",
                cy: "4",
                r: "3",
                stroke_linejoin: "miter",
            }
            circle {
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "19",
                cy: "20",
                r: "3",
                stroke_linejoin: "miter",
            }
        }
    }
}
