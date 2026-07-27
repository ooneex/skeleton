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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5 25.5V44H7.5L7.5 25.5H10.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40.5 38.5V44H37.5V38.5H40.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 31.5V44H22.5V31.5H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40.5 4V15.5H37.5V4H40.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 4V25.5H22.5V4H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.5 4V10.5H7.50002L7.50002 4H10.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M29 23H19V34H29V23Z",
                fill: "currentColor",
            }
            path {
                d: "M14 8H4V28H14V8Z",
                fill: "currentColor",
            }
            path {
                d: "M44 13H34V41H44V13Z",
                fill: "currentColor",
            }
        }
    }
}
