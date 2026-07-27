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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M44.3787 21.8787L26.1213 3.62135C24.9497 2.44978 23.0502 2.44978 21.8787 3.62135L3.62132 21.8787C2.44975 23.0502 2.44974 24.9497 3.62131 26.1213L21.8787 44.3787C23.0502 45.5503 24.9497 45.5503 26.1213 44.3787L44.3787 26.1213C45.5502 24.9497 45.5502 23.0502 44.3787 21.8787Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 22.5L24 13.5L33 22.5",
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
