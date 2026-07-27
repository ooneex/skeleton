use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopAlertIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopAlertIcon(props: LaptopAlertIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M36 13L36 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 23H27.9967C26.4666 23 25.5065 21.3451 26.2651 20.0161L34.2687 6.00536C35.0345 4.66488 36.9661 4.66488 37.7305 6.00536L45.7341 20.0161C46.4942 21.3451 45.5341 23 44.0025 23H42",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M35 23C35 23.5523 35.4477 24 36 24C36.5523 24 37 23.5523 37 23C37 22.4477 36.5523 22 36 22C35.4477 22 35 22.4477 35 23Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M3 34V38C3 39.6569 4.34315 41 6 41H42C43.6569 41 45 39.6569 45 38V34H32V35C32 36.1046 31.1046 37 30 37H18C16.8954 37 16 36.1046 16 35V34H3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M5 29V12C5 9.23858 7.23858 7 10 7H28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M43 29V28",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
