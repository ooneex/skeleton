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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0 23H32V29H26V26L19.0001 25.9999V29H13.0001V25.9999L6 26V29H0V23Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.01625 4H26.9838L31.7898 21H0.210266L5.01625 4ZM7.93239 19H9.95409L11.8745 6H9.85282L7.93239 19ZM15 6V19H17V6H15ZM20.1426 6L22.0492 19H24.0706L22.164 6H20.1426Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
