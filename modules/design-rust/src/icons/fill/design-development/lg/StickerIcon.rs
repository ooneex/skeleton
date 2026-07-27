use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StickerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StickerIcon(props: StickerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5 24C5 13.5066 13.5066 5 24 5C34.2888 5 42.6674 13.178 42.9903 23.3883L42.9724 23.4063H40.0341C30.6452 23.4063 23.3984 30.637 23.3984 40.0259V42.9802L23.3883 42.9903C13.178 42.6674 5 34.2888 5 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 5C13.5066 5 5 13.5066 5 24C5 34.2887 13.178 42.6674 23.3883 42.9903L42.9903 23.3883C42.6674 13.178 34.2887 5 24 5ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24V24.6213L24.6213 46H24C11.8497 46 2 36.1503 2 24Z",
                fill: "currentColor",
            }
        }
    }
}
