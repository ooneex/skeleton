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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "4",
                width: "11",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "4",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7",
                y: "1",
                width: "2",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "19",
                y: "11",
                width: "3",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "11",
                width: "15",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "8",
                width: "2",
                height: "8",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "18",
                width: "11",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "18",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7",
                y: "15",
                width: "2",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
