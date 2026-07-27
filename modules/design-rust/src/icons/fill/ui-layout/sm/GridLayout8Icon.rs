use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridLayout8IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridLayout8Icon(props: GridLayout8IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "1",
                width: "6",
                height: "22",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "9",
                width: "6",
                height: "14",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "1",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "17",
                width: "6",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "9",
                y: "9",
                width: "6",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
