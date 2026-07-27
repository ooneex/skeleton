use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CreditCardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CreditCardIcon(props: CreditCardIconProps) -> Element {
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
                d: "M1 18V10H23V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18ZM5 15V17H9V15H5Z",
                fill: "currentColor",
            }
            path {
                d: "M4 3C2.34315 3 1 4.34315 1 6V7H23V6C23 4.34315 21.6569 3 20 3H4Z",
                fill: "currentColor",
            }
        }
    }
}
