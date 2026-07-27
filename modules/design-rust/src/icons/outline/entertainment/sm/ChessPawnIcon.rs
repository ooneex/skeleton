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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 9V9C10.316 11.8443 9.32202 14.678 7.29844 16.7016L6 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 9H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 18L16.7016 16.7016C14.678 14.678 13.684 11.8443 14 9V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M18.5 18H5.5C4.67157 18 4 18.6716 4 19.5V22H20V19.5C20 18.6716 19.3284 18 18.5 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            ellipse {
                cx: "12",
                cy: "5",
                rx: "3",
                ry: "3",
                transform: "rotate(90 12 5)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
