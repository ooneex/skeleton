use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shapes2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shapes2Icon(props: Shapes2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "18.5",
                cy: "8.5",
                r: "5.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "5",
                y: "14",
                width: "9",
                height: "9",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "6 .984 .276 11 11.724 11 6 .984",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
