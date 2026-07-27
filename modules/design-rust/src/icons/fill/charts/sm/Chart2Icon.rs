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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "13",
                width: "6",
                height: "8",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "8",
                width: "6",
                height: "13",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17",
                y: "3",
                width: "6",
                height: "18",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
