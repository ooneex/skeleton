use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Computer3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Computer3Icon(props: Computer3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 29L22.0133 28H16V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 19L24 8L8 8L8 19L24 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 24L27 27C27 28.1046 26.1046 29 25 29L7 29C5.89543 29 5 28.1046 5 27L5 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 21L29 6C29 4.34315 27.6569 3 26 3L6 3C4.34315 3 3 4.34314 3 6L3 21C3 22.6569 4.34315 24 6 24L26 24C27.6569 24 29 22.6569 29 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
