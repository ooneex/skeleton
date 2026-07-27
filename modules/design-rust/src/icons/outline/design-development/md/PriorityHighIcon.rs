use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityHighIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityHighIcon(props: PriorityHighIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28.9636 13.8787L18.1213 3.03638C16.9497 1.8648 15.0503 1.86481 13.8787 3.03638L3.03638 13.8787C1.8648 15.0503 1.86481 16.9497 3.03638 18.1213L13.8787 28.9636C15.0503 30.1352 16.9497 30.1352 18.1213 28.9636L28.9636 18.1213C30.1352 16.9497 30.1352 15.0503 28.9636 13.8787Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 15L16 9L22 15",
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
