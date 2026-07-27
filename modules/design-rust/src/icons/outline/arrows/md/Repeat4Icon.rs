use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Repeat4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Repeat4Icon(props: Repeat4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 7H21C25.9706 7 30 11.0294 30 16V16C30 20.9706 25.9706 25 21 25H19L23 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 25H11C6.02944 25 2 20.9706 2 16V16C2 11.0294 6.02944 7 11 7H13L9 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
