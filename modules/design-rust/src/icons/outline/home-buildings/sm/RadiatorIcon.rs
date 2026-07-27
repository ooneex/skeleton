use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RadiatorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RadiatorIcon(props: RadiatorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 7H1",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21 15H23V17H21",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M9 6L9 18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18L15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 6L15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18L21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 6L3 18C3 19.6569 4.34314 21 6 21C7.65685 21 9 19.6569 9 18L9 6C9 4.34315 7.65685 3 6 3C4.34314 3 3 4.34315 3 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
