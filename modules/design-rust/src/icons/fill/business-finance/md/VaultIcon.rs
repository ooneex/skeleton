use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct VaultIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn VaultIcon(props: VaultIconProps) -> Element {
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
                d: "M25 28V32H23V28H25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 28V32H7V28H9Z",
                fill: "currentColor",
            }
            path {
                d: "M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26V6C30 3.79086 28.2091 2 26 2H6ZM4 22H8V24H24V8H8V10H4V12H8V20H4V22Z",
                fill: "currentColor",
            }
        }
    }
}
