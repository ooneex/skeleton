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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5 11.5V36.5H12.5V11.5H15.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M4 4V14H24V4H4Z",
                fill: "currentColor",
            }
            path {
                d: "M4 34V44H24V34H4Z",
                fill: "currentColor",
            }
            path {
                d: "M39 13.292L31.2665 24L39 34.7079L46.7335 24L39 13.292Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 4H40.5V10H37.5V7H27V4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27 44H40.5V38H37.5V41H27V44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
