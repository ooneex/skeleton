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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "1",
                width: "12",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "9",
                width: "12",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "17",
                width: "12",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                y: "1",
                width: "6",
                height: "22",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
