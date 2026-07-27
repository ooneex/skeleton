use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDotRotateAnticlockwiseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDotRotateAnticlockwiseIcon(props: ArrowDotRotateAnticlockwiseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 29.5C23.4558 29.5 29.5 23.4558 29.5 16C29.5 8.54416 23.4558 2.5 16 2.5C10.9006 2.5 6.46153 5.32737 4.16497 9.5L4.21542 9.40917",
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
                d: "M7.5 29.5C9.98528 29.5 12 27.4853 12 25C12 22.5147 9.98528 20.5 7.5 20.5C5.01472 20.5 3 22.5147 3 25C3 27.4853 5.01472 29.5 7.5 29.5Z",
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
