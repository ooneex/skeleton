use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KitchenHoodIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KitchenHoodIcon(props: KitchenHoodIconProps) -> Element {
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
                d: "M7 2H17V7.01451L23 10.476V17H1V10.476L7 7.01451V2ZM11 12V14.01H9V12H11ZM15 12H13V14.01H15V12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 19V20C9 21.6569 7.65685 23 6 23H3V21H6C6.55228 21 7 20.5523 7 20V19H9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 19V20C15 21.6569 16.3431 23 18 23H21V21H18C17.4477 21 17 20.5523 17 20V19H15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 19V23H11V19H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
