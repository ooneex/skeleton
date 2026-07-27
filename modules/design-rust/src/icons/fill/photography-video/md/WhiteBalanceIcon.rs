use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WhiteBalanceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WhiteBalanceIcon(props: WhiteBalanceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32 15.5858L17.5858 30H32V15.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 15.5858L14.4142 30H0V15.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2H27V17H5V2Z",
                fill: "currentColor",
            }
        }
    }
}
