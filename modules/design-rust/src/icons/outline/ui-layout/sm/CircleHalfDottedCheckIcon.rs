use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleHalfDottedCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleHalfDottedCheckIcon(props: CircleHalfDottedCheckIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "7 13 10 16 17 8",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "7.933",
                cy: "2.865",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "4.569",
                cy: "5.309",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "2.489",
                cy: "8.91",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "2.055",
                cy: "13.045",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "3.34",
                cy: "17",
                r: "1",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m12,2c5.523,0,10,4.477,10,10s-4.477,10-10,10c-2.197,0-4.228-.708-5.878-1.909",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
