use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridLayout10IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridLayout10Icon(props: GridLayout10IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "21",
                y: "2",
                width: "9",
                height: "28",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "17",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "12",
                width: "17",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "22",
                width: "17",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
