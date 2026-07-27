use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct JamIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn JamIcon(props: JamIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7.33333 7L5 12H27L24.6667 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 16V27C6 28.1046 6.89543 29 8 29H24C25.1046 29 26 28.1046 26 27V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25 3H7C5.89543 3 5 3.89543 5 5C5 6.10457 5.89543 7 7 7H25C26.1046 7 27 6.10457 27 5C27 3.89543 26.1046 3 25 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 19H11V24H21V19Z",
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
