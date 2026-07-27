use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PalletIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PalletIcon(props: PalletIconProps) -> Element {
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
                d: "M0 19H6V22H0V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 19H15V22H9V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 19H24V22H18V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 14.8447V17H24V14.8447L20.2312 3H3.76878L0 14.8447ZM5.86722 5H7.88278L6.63278 15H4.61722L5.86722 5ZM11 15V5H13V15H11ZM19.3828 15H17.3672L16.1172 5H18.1328L19.3828 15Z",
                fill: "currentColor",
            }
        }
    }
}
