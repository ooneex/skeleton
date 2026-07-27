use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShieldIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShieldIcon(props: ShieldIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 10.1719V3.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 37.7709V45",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 7.5C12.1 7.5 18.9 7.7 24 3.5C29.1 7.7 35.9 7.5 41 7.5V26.4286C41 39.2857 24 45 24 45C24 45 7 39.2857 7 26.4286V7.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24C27 25.6569 25.6569 27 24 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 38L14 24L24 10L34 24L24 38Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
