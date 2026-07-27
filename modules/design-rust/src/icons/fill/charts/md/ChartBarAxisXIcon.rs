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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "28",
                width: "30",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "12",
                width: "8",
                height: "14",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "12",
                y: "2",
                width: "8",
                height: "24",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "22",
                y: "17",
                width: "8",
                height: "9",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
