use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartBarAxisXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartBarAxisXIcon(props: ChartBarAxisXIconProps) -> Element {
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
                y: "20",
                width: "22",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1",
                y: "7",
                width: "6",
                height: "11",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "2",
                width: "6",
                height: "16",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "17",
                y: "11",
                width: "6",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
