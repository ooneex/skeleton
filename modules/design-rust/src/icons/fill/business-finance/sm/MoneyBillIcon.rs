use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoneyBillIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoneyBillIcon(props: MoneyBillIconProps) -> Element {
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
                d: "M0 4V20H24V4H0ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM6 15H3V17H6V15ZM18 9V7H21V9H18Z",
                fill: "currentColor",
            }
        }
    }
}
