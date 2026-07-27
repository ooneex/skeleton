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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 1V13H6V1H8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 1L24 5L22 5L22 1L24 1Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.1224 4.29184L27.294 7.12027L25.8798 5.70605L28.7082 2.87762L30.1224 4.29184Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 30L10 30C7.79086 30 6 28.2091 6 26L6 7H22C24.2091 7 26 8.79086 26 11L26 26C26 28.2091 24.2091 30 22 30ZM23 11V20H9L9 11L23 11ZM17 23H15V27H17V23ZM20 24L20 26.01L18 26.01L18 24L20 24ZM14 24L12 24L12 26.01L14 26.01L14 24Z",
                fill: "currentColor",
            }
        }
    }
}
