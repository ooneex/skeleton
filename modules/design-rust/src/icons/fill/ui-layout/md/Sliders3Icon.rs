use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders3Icon(props: Sliders3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "27",
                y: "15",
                width: "3",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "15",
                width: "19",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "19",
                y: "11",
                width: "6",
                height: "10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "25",
                width: "8",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                y: "25",
                width: "14",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "8",
                y: "21",
                width: "6",
                height: "10",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "5",
                width: "8",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                y: "5",
                width: "14",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "8",
                y: "1",
                width: "6",
                height: "10",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
