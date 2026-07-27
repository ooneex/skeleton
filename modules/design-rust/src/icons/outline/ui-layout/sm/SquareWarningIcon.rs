use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareWarningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareWarningIcon(props: SquareWarningIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "12",
                y1: "7",
                x2: "12",
                y2: "13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "16.75",
                r: "1.25",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
        }
    }
}
