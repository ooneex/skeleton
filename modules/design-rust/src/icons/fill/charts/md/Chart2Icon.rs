use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Chart2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Chart2Icon(props: Chart2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "12",
                y: "11",
                width: "7",
                height: "19",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "20",
                width: "7",
                height: "10",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "22",
                y: "2",
                width: "8",
                height: "28",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
