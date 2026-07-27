use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders2VerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders2VerticalIcon(props: Sliders2VerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "5",
                y: "2",
                width: "2",
                height: "13",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "5",
                y: "24",
                width: "2",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "2",
                width: "2",
                height: "13",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "24",
                width: "2",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6",
                cy: "21.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "26",
                cy: "21.5",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "17",
                width: "2",
                height: "13",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "2",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "16",
                cy: "10.5",
                r: "4.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
