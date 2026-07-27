use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders2Icon(props: Sliders2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "17",
                y: "5",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "5",
                width: "6",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "25",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "25",
                width: "6",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "10.5",
                cy: "6",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "10.5",
                cy: "26",
                r: "4.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "15",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "24",
                y: "15",
                width: "6",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "21.5",
                cy: "16",
                r: "4.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
