use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Copies4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Copies4Icon(props: Copies4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 4H21V6H3V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 0H19V2H5V0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 24C2.34315 24 1 22.6569 1 21V11C1 9.34315 2.34315 8 4 8H20C21.6569 8 23 9.34315 23 11V21C23 22.6569 21.6569 24 20 24H4ZM7 20V12H17V20H7Z",
                fill: "currentColor",
            }
        }
    }
}
