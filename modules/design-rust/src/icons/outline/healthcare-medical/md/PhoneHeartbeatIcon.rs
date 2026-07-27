use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PhoneHeartbeatIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PhoneHeartbeatIcon(props: PhoneHeartbeatIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 14L7 5C7 3.34315 8.34315 2 10 2L22 2C23.6569 2 25 3.34315 25 5L25 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17.75 6.5L14.25 6.5C14.1119 6.5 14 6.38807 14 6.25C14 6.11193 14.1119 6 14.25 6L17.75 6C17.8881 6 18 6.11193 18 6.25C18 6.38807 17.8881 6.5 17.75 6.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 18H10.2222L13 12L18.5 22.5L21.7778 18H29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 26H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 22L7 27C7 28.6569 8.34315 30 10 30L22 30C23.6569 30 25 28.6569 25 27L25 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
