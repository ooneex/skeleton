use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChessKnightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChessKnightIcon(props: ChessKnightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23.5 24C27.521 12.5 21.6277 2.98485 10 3.00002V5.49999L4 12L5.5 15L12 13C15.2378 19.1552 8.52096 19 8.52096 24.0238",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M11 8C10.4477 8 10 8.44772 10 9C10 9.55228 10.4477 10 11 10C11.5523 10 12 9.55228 12 9C12 8.44772 11.5523 8 11 8Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M24 24H8C6.34315 24 5 25.3431 5 27V29H27V27C27 25.3431 25.6569 24 24 24Z",
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
