use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CartArrowDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CartArrowDownIcon(props: CartArrowDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "13",
                y1: "2",
                x2: "13",
                y2: "11.75",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "6",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "20",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
            circle {
                cx: "6",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "20",
                cy: "21",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m17,6h5l-1.678,8.392c-.187.935-1.008,1.608-1.961,1.608H7.735c-.995,0-1.839-.732-1.98-1.717l-1.755-12.283H1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "10.5 10 13 12.5 15.5 10",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "9",
                y1: "6",
                x2: "4.821",
                y2: "6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
