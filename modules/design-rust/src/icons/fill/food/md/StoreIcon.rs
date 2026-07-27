use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StoreIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StoreIcon(props: StoreIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.61738 8L1 10.5818V15H31V10.5818L28.3826 8H3.61738Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 17H3V26C3 28.2091 4.79087 30 7.00001 30L16 30V21H22V30L25 30C27.2091 30 29 28.2091 29 26V17ZM12 21L12 26L7 26L7 21L12 21Z",
                fill: "currentColor",
            }
            path {
                d: "M5.19995 6V2H26.7999V6H5.19995Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
