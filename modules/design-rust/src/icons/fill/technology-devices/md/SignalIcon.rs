use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SignalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SignalIcon(props: SignalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "24",
                width: "2",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "17",
                width: "2",
                height: "13",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "19",
                y: "10",
                width: "2",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "27",
                y: "2",
                width: "2",
                height: "28",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
