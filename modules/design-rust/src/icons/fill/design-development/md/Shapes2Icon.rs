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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "7",
                y: "19",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "8 2.056 .233 15 15.767 15 8 2.056",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "25",
                cy: "11",
                r: "7",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
