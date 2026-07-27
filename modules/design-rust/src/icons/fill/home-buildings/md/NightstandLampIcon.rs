use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NightstandLampIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NightstandLampIcon(props: NightstandLampIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 11V20L15 20V11H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 26V31H5V26H7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 26V31H25V26H27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M21.6815 13C23.0059 13 23.9645 11.7361 23.6074 10.4607L23.1984 9L8.80152 9L8.39251 10.4607C8.03543 11.736 8.99408 13 10.3184 13H21.6815Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 25L31 21C31 19.3431 29.6569 18 28 18L4 18C2.34315 18 1 19.3431 1 21V25C1 26.6569 2.34315 28 4 28L28 28C29.6569 28 31 26.6569 31 25ZM19 22V24L13 24V22L19 22Z",
                fill: "currentColor",
            }
            path {
                d: "M9.36157 7L22.6385 7L20.9585 1H11.0416L9.36157 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
