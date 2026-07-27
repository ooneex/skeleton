use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoneyTransferIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoneyTransferIcon(props: MoneyTransferIconProps) -> Element {
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
                d: "M26.5 16C26.5 21.799 21.799 26.5 16 26.5C10.201 26.5 5.5 21.799 5.5 16C5.5 10.201 10.201 5.5 16 5.5C21.799 5.5 26.5 10.201 26.5 16ZM17 20V12H15V20H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.9999 19.5858V29H28.9999V24.4142L21.9999 31.4142L20.5857 30L30.9999 19.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1.00009 12.4142L1.00009 2.99997L3.00009 2.99997L3.00009 7.58576L10.0001 0.585758L11.4143 1.99997L1.00009 12.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
