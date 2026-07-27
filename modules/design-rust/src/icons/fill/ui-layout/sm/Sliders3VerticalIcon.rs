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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "4",
                y: "2",
                width: "2",
                height: "11",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "15",
                width: "2",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "15",
                width: "8",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "2",
                width: "2",
                height: "3",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "11",
                y: "7",
                width: "2",
                height: "15",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "8",
                y: "7",
                width: "8",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "18",
                y: "2",
                width: "2",
                height: "11",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "15",
                width: "2",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "15",
                width: "8",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
