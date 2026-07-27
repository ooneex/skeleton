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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "2",
                width: "8",
                height: "28",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "22",
                y: "12",
                width: "8",
                height: "18",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "12",
                y: "2",
                width: "18",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "12",
                y: "22",
                width: "8",
                height: "8",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "12",
                y: "12",
                width: "8",
                height: "8",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
