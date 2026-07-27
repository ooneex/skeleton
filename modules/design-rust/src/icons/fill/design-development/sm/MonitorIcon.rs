use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MonitorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MonitorIcon(props: MonitorIconProps) -> Element {
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
                d: "M11 21V17H13V21H11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 20H18V22H6V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 18C2.34315 18 1 16.6569 1 15L1 6C1 4.34314 2.34315 3 4 3L20 3C21.6569 3 23 4.34315 23 6L23 15C23 16.6569 21.6569 18 20 18L4 18Z",
                fill: "currentColor",
            }
        }
    }
}
