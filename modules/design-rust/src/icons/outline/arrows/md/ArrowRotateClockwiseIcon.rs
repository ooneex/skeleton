use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowRotateClockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowRotateClockwiseIcon(props: ArrowRotateClockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29.5 16C29.5 23.4558 23.4558 29.5 16 29.5C8.54416 29.5 2.5 23.4558 2.5 16C2.5 8.54416 8.54416 2.5 16 2.5C21.0994 2.5 25.5385 5.32737 27.835 9.5L27.7846 9.40917",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 2.5V9.5H21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
