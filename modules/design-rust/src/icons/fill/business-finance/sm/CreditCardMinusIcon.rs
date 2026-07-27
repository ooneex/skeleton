use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CreditCardMinusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CreditCardMinusIcon(props: CreditCardMinusIconProps) -> Element {
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
                d: "M13 18H23V20H13V18Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 10V18C1 19.6569 2.34315 21 4 21H11V18C11 16.8954 11.8954 16 13 16H23V10H1ZM4 17V15H8V17H4Z",
                fill: "currentColor",
            }
            path {
                d: "M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V7H1V6Z",
                fill: "currentColor",
            }
        }
    }
}
