use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessPawnIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessPawnIcon(props: ChessPawnIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 22V22C21 27.309 18.8369 32.3889 15.0096 36.0682L13 38",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M35 38L32.9904 36.0682C29.1631 32.3889 27 27.309 27 22V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M33 17H15V22H33V17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            ellipse {
                cx: "24",
                cy: "11",
                rx: "6",
                ry: "6",
                transform: "rotate(90 24 11)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M37 38H11C8.79086 38 7 39.7909 7 42V45H41V42C41 39.7909 39.2091 38 37 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
