use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FullsizeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FullsizeIcon(props: FullsizeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "9",
                y: "10",
                width: "14",
                height: "12",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "5",
                y: "6",
                width: "2",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "25",
                y: "6",
                width: "2",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "2",
                width: "2",
                height: "28",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "29",
                y: "2",
                width: "2",
                height: "28",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
