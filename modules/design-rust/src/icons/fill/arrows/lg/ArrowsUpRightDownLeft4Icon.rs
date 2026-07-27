use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsUpRightDownLeft4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsUpRightDownLeft4Icon(props: ArrowsUpRightDownLeft4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 7.5V18H22.5V7.5H25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 30V40.5H22.5V30H25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 25.5L8 25.5L8 22.5L18 22.5L18 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M40 25.5L30 25.5L30 22.5L40 22.5L40 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4999 12.0002L23.9999 3.33355L30.4999 11.9999L17.4999 12.0002Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.4999 36L23.9999 44.6667L30.4999 36.0003L17.4999 36Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.9998 17.5L44.6665 24.0001L36.0001 30.5L35.9998 17.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 17.5L3.3333 24.0001L11.9997 30.5L12 17.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
