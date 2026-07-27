use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SoupIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SoupIcon(props: SoupIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M28 21L4 21",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 17V18.8462C4 24.7357 6.51029 26.7793 10.4615 29H16H21.5385C25.4897 26.7793 28 24.7357 28 18.8462V17H4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.6596 3C13.9784 4.19571 14.1539 6.51522 16 7.5C17.8461 8.48478 18.0216 10.8043 16.3405 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.34045 12C11.0216 10.8043 10.8461 8.48478 9 7.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22.6596 3C20.9784 4.19571 21.1539 6.51522 23 7.5C24.8461 8.48478 25.0216 10.8043 23.3405 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
