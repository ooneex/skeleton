use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DecisionProcessIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DecisionProcessIcon(props: DecisionProcessIconProps) -> Element {
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
                d: "M14 22H19.5V19H17.5V20H14V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 2H19.5V5H17.5V4H14V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 6V18H6V6H8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M2 16V22H12V16H2Z",
                fill: "currentColor",
            }
            path {
                d: "M2 2V8H12V2H2Z",
                fill: "currentColor",
            }
            path {
                d: "M18.5 6.48141L13.6712 12L18.5 17.5186L23.3288 12L18.5 6.48141Z",
                fill: "currentColor",
            }
        }
    }
}
