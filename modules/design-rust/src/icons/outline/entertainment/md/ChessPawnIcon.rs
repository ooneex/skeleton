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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 11V13.6554C14 16.4626 13.0158 19.181 11.2187 21.3376L9 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 24L20.7813 21.3376C18.9842 19.181 18 16.4626 18 13.6554V11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10 11H22.3333",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            ellipse {
                cx: "16",
                cy: "7",
                rx: "4",
                ry: "4",
                transform: "rotate(90 16 7)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
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
