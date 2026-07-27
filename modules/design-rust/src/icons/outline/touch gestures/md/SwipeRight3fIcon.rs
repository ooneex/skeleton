use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SwipeRight3fIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SwipeRight3fIcon(props: SwipeRight3fIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 29V21C19 19.3431 20.3431 18 22 18V18C23.6569 18 25 19.3431 25 21V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 29V21C7 19.3431 8.34315 18 10 18V18C11.6569 18 13 19.3431 13 21V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 29V19C13 17.3431 14.3431 16 16 16V16C17.6569 16 19 17.3431 19 19V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 7L29 7L28.3333 7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24.5 2.49997L29 7L24.5 11.5",
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
