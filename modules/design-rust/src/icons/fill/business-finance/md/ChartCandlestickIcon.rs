use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChartCandlestickIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChartCandlestickIcon(props: ChartCandlestickIconProps) -> Element {
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
                d: "M7 17V30H5V17H7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 26V30H25V26H27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 21V30H15V21H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 2V11H25V2H27Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 2V17H15V2H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.00002 2V7H5.00002V2H7.00002Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M19 15H13V23H19V15Z",
                fill: "currentColor",
            }
            path {
                d: "M9 5H3V19H9V5Z",
                fill: "currentColor",
            }
            path {
                d: "M29 9H23V28H29V9Z",
                fill: "currentColor",
            }
        }
    }
}
