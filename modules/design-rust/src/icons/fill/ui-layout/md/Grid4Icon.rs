use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Grid4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Grid4Icon(props: Grid4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "17",
                y: "10",
                width: "5",
                height: "5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "24",
                y: "3",
                width: "5",
                height: "5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "3",
                y: "24",
                width: "5",
                height: "5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "10",
                y: "17",
                width: "5",
                height: "5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "3",
                y: "3",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "10",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10",
                y: "10",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "24",
                y: "10",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10",
                y: "3",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "3",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "17",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "10",
                y: "24",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "24",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "24",
                y: "24",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "17",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "24",
                y: "17",
                width: "5",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
