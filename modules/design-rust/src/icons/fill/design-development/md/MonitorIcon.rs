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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 24V29H15V24H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M5 3C2.79086 3 1 4.79086 1 7V21C1 23.2091 2.79086 25 5 25H27C29.2091 25 31 23.2091 31 21V7C31 4.79086 29.2091 3 27 3H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 28H24V30H8V28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
