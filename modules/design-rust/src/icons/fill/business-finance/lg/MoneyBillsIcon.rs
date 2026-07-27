use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoneyBillsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoneyBillsIcon(props: MoneyBillsIconProps) -> Element {
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
                d: "M6 5H42V8H6V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 11H47V43H1V11ZM4 14V40H44V14H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 17C10 18.6569 8.65685 20 7 20V34C8.65685 34 10 35.3431 10 37H38C38 35.3431 39.3431 34 41 34V20C39.3431 20 38 18.6569 38 17H10ZM29 27C29 29.7614 26.7614 32 24 32C21.2386 32 19 29.7614 19 27C19 24.2386 21.2386 22 24 22C26.7614 22 29 24.2386 29 27ZM32.5 25.5H37.5V28.5H32.5V25.5ZM10.5 25.5V28.5H15.5V25.5H10.5Z",
                fill: "currentColor",
            }
        }
    }
}
