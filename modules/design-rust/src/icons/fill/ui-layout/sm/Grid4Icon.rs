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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "18.5",
                y: "2",
                width: "3.5",
                height: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "13",
                y: "7.5",
                width: "3.5",
                height: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "7.5",
                y: "13",
                width: "3.5",
                height: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "18.5",
                width: "3.5",
                height: "3.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7.5",
                y: "2",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "13",
                y: "2",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "7.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18.5",
                y: "7.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7.5",
                y: "7.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "13",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18.5",
                y: "13",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "13",
                y: "13",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18.5",
                y: "18.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7.5",
                y: "18.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "13",
                y: "18.5",
                width: "3.5",
                height: "3.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
