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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 24V12H31V24C31 26.2091 29.2091 28 27 28H5C2.79086 28 1 26.2091 1 24ZM5 21V23H10V21H5Z",
                fill: "currentColor",
            }
            path {
                d: "M1 8C1 5.79086 2.79086 4 5 4H27C29.2091 4 31 5.79086 31 8L1 8Z",
                fill: "currentColor",
            }
        }
    }
}
