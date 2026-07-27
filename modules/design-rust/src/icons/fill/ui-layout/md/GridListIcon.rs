use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridListIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridListIcon(props: GridListIconProps) -> Element {
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
                y: "4",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17",
                y: "10",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17",
                y: "20",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "17",
                y: "26",
                width: "13",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "18",
                width: "12",
                height: "12",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
