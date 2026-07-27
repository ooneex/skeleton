use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBackToUpRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBackToUpRightIcon(props: ArrowBackToUpRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 20L29 26C29 27.6569 27.6569 29 26 29L6 29C4.34315 29 3 27.6569 3 26L3 12C3 10.3431 4.34315 9 6 9L29 9L28.5 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 16L29 9L22 2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
