use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AtmMachineBillCoinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AtmMachineBillCoinIcon(props: AtmMachineBillCoinIconProps) -> Element {
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
                d: "M24 0L24 9L18 9L18 7L22 7L22 2L2 2L2 7L6 7L6 9L1.51395e-06 9L1.90735e-06 -1.04907e-06L24 0Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 4L4 4L4 23L20 23L20 4ZM9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34314 9 11ZM15 17L17 17L17 20L15 20L15 17Z",
                fill: "currentColor",
            }
        }
    }
}
