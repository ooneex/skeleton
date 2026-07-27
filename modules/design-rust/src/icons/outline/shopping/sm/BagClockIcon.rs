use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagClockIcon(props: BagClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                "data-cap": "butt",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                points: "20.862,13.9 20,7 4,7 2,23 18,23",
                stroke_linejoin: "miter",
                stroke_linecap: "butt",
            }
            polyline {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                points: "18,16 18,18 20,18",
                stroke_linejoin: "miter",
            }
            circle {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                cx: "18",
                cy: "18",
                r: "5",
                stroke_linejoin: "miter",
            }
            path {
                "data-color": "color-2",
                fill: "none",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                d: "M8,10V5 c0-2.2,1.8-4,4-4l0,0c2.2,0,4,1.8,4,4v5",
                stroke_linejoin: "miter",
            }
        }
    }
}
