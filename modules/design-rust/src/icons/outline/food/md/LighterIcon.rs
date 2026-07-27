use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LighterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LighterIcon(props: LighterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 17V13H13V17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M6 17H8L8 2L6 2C4.34315 2 3 3.34315 3 5L3 14C3 15.6569 4.34315 17 6 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 17H26V27C26 28.6569 24.6569 30 23 30H11C9.34315 30 8 28.6569 8 27V17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.5 10C19.2951 10 20.75 8.607 20.75 6.8885C20.75 4.66667 17.5 2 17.5 2C17.5 2 14.25 4.66667 14.25 6.8885C14.25 8.60583 15.7049 10 17.5 10Z",
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
