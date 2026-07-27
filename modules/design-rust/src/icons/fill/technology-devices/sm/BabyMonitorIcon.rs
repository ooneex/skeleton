use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BabyMonitorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BabyMonitorIcon(props: BabyMonitorIconProps) -> Element {
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
                d: "M6 1V10.5H4V1H6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 23L17 23C18.6569 23 20 21.6569 20 20L20 9C20 7.34315 18.6569 6 17 6H4V20C4 21.6569 5.34315 23 7 23ZM16 17V10L8 10L8 17H16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 1V4L16 4V1L18 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.364 4.05026L21.2426 6.17158L19.8284 4.75737L21.9498 2.63605L23.364 4.05026Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
