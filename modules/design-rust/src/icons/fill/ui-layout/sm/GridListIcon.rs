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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "13",
                y: "3",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "13",
                y: "7",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "8",
                height: "8",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "14",
                width: "8",
                height: "8",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "13",
                y: "15",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "13",
                y: "19",
                width: "9",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
