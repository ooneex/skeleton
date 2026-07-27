use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders3VerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders3VerticalIcon(props: Sliders3VerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "15",
                y: "2",
                width: "2",
                height: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "11",
                width: "2",
                height: "19",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "7",
                width: "10",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "25",
                y: "22",
                width: "2",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "2",
                width: "2",
                height: "14",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "21",
                y: "18",
                width: "10",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "5",
                y: "22",
                width: "2",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "5",
                y: "2",
                width: "2",
                height: "14",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "18",
                width: "10",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
