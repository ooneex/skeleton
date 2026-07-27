use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Location4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Location4Icon(props: Location4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 16V25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 16C19.866 16 23 12.866 23 9C23 5.13401 19.866 2 16 2C12.134 2 9 5.13401 9 9C9 12.866 12.134 16 16 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 20C26.2627 20.7433 30 22.6256 30 24.8303C30 27.6854 23.732 30 16 30C8.26801 30 2 27.6854 2 24.8303C2 22.6256 5.73726 20.7433 11 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 9C13 7.34315 14.3431 6 16 6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
