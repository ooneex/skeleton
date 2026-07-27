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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "17",
                width: "2",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "8",
                y: "12",
                width: "2",
                height: "10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "7",
                width: "2",
                height: "15",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "20",
                y: "2",
                width: "2",
                height: "20",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
