use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilkContainerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilkContainerIcon(props: MilkContainerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 13H27",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 6H24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 13L5 27C5 28.6569 6.34315 30 8 30L24 30C25.6569 30 27 28.6569 27 27L27 13L24 6L24 2L8 2L8 6L5 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 25C17.933 25 19.5 23.433 19.5 21.5C19.5 19.567 17.933 18 16 18C14.067 18 12.5 19.567 12.5 21.5C12.5 23.433 14.067 25 16 25Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
