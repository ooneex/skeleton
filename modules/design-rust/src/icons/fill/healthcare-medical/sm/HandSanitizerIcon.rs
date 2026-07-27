use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandSanitizerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandSanitizerIcon(props: HandSanitizerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 2V6H11V2H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M7 5V8H17V5H7Z",
                fill: "currentColor",
            }
            path {
                d: "M3 5C3 2.79086 4.79086 1 7 1H18V3H7C5.89543 3 5 3.89543 5 5V6H3V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 10C19.6569 10 21 11.3431 21 13V20C21 21.6569 19.6569 23 18 23H6C4.39489 23 3.08421 21.7394 3.00391 20.1543L3 20V13C3 11.3431 4.34315 10 6 10H18ZM11 15.5H8.5V17.5H11V20H13V17.5H15.5V15.5H13V13H11V15.5Z",
                fill: "currentColor",
            }
        }
    }
}
