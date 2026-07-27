use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RefreshIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RefreshIcon(props: RefreshIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29.5 16C29.5 8.54416 23.4558 2.5 16 2.5C10.9006 2.5 6.46153 5.32737 4.16497 9.5L4.21542 9.40917",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.5 2.5V9.5H10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2.5 16C2.5 23.4558 8.54416 29.5 16 29.5C21.0994 29.5 25.5385 26.6726 27.835 22.5L27.7846 22.5908",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 29.5V22.5H21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
