use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft3Icon(props: ShareLeft3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.408 4.23511L2 23.9999L25.408 43.7646V30.9176L31.9998 30.9175C38.7314 30.9174 44.3533 35.6683 45.6955 42H46L46 32.0821C46 23.7978 39.2842 17.082 30.9998 17.0821L25.408 17.0822V4.23511Z",
                fill: "currentColor",
            }
        }
    }
}
