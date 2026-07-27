use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PowerDrillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PowerDrillIcon(props: PowerDrillIconProps) -> Element {
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
                d: "M14.5 2H5C3.34315 2 2 3.34315 2 5V9C2 10.6569 3.34315 12 5 12H14.5V2ZM6 8V6H9V8H6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 6H23V8H18V6Z",
                fill: "currentColor",
            }
            path {
                d: "M16.5132 12L20 10.0928V3.90715L16.5 2L16.5132 12Z",
                fill: "currentColor",
            }
            path {
                d: "M5.65499 14L5.19433 16.907L4.82835 17.0623C3.7199 17.5325 3 18.62 3 19.824V22H17V20.1634C17 18.7174 15.9685 17.4771 14.5467 17.2136L11.2974 16.6114L11.6171 14H5.65499Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
