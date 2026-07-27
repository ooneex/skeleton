use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WaterFaucetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WaterFaucetIcon(props: WaterFaucetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35 26V29H44V26H35Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 4V12H17V9.91321L30 8.91321V4H4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 15V44L20 44V35C20 28.9249 24.9249 24 31 24L44 24V21C44 17.6863 41.3137 15 38 15H4Z",
                fill: "currentColor",
            }
        }
    }
}
