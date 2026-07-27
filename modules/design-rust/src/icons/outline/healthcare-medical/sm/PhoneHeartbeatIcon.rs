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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.00002 10L5.00002 4C5.00002 2.89543 5.89545 2 7.00002 2L17 2C18.1046 2 19 2.89543 19 4L19 10M5.00001 18L5.00001 20C5.00001 21.1046 5.89544 22 7.00001 22L17 22C18.1046 22 19 21.1046 19 20L19 18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.4397 5.12062L10.5603 5.12062C10.527 5.12062 10.5 5.09362 10.5 5.06031C10.5 5.027 10.527 5 10.5603 5L13.4397 5C13.473 5 13.5 5.027 13.5 5.06031C13.5 5.09362 13.473 5.12062 13.4397 5.12062Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3 14H8L10 10.5L14 17L16 14H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
