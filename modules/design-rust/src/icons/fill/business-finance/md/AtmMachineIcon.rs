use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AtmMachineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AtmMachineIcon(props: AtmMachineIconProps) -> Element {
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
                d: "M22 2C24.2091 2 26 3.79086 26 6L26 22H6V6C6 3.79086 7.79086 2 10 2H22ZM22 5L10 5L10 13L22 13V5ZM17 16V18H22V16H17Z",
                fill: "currentColor",
            }
            path {
                d: "M29 24H3V29H29V24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
