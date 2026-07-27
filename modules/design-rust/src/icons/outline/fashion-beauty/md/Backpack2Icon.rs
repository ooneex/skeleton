use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Backpack2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Backpack2Icon(props: Backpack2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 7V6C12 3.79086 13.7909 2 16 2V2C18.2091 2 20 3.79086 20 6V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 24V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 16V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 16V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 24V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25 15L26 15C27.6569 15 29 16.3431 29 18L29 26C29 27.6569 27.6569 29 26 29L6 29C4.34315 29 3 27.6569 3 26L3 18C3 16.3431 4.34315 15 6 15L7 15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 10L7 15C7 16.6569 8.34315 18 10 18L22 18C23.6569 18 25 16.6569 25 15L25 10C25 8.34316 23.6569 7.00001 22 7.00001L10 7.00001C8.34315 7.00001 7 8.34315 7 10Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
