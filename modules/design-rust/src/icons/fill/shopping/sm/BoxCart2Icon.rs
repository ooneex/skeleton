use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BoxCart2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BoxCart2Icon(props: BoxCart2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13.5 2H8V11.5C8 12.8807 9.11929 14 10.5 14H18.5C19.8807 14 21 12.8807 21 11.5V2H15.5V7H13.5V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 1H4.90492L6.40498 16H22V18H4.59502L3.09496 3H0V1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.6222 17.4789L18.3742 16.5144L19.0437 17.7194L19.0343 17.7246L21.8568 22.8991L20.101 23.8568L16.6222 17.4789Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 22C4 20.8954 4.89543 20 6 20C7.10457 20 8 20.8954 8 22C8 23.1046 7.10457 24 6 24C4.89543 24 4 23.1046 4 22Z",
                fill: "currentColor",
            }
        }
    }
}
