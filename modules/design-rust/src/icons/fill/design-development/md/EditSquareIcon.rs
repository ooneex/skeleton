use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EditSquareIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EditSquareIcon(props: EditSquareIconProps) -> Element {
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
                d: "M8 5H24V7H8V5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 25H24V27H8V25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 24L25 8L27 8L27 24L25 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 8L7 8L7 24L5 24L5 8Z",
                fill: "currentColor",
            }
            path {
                d: "M9.5 2.5H2.5V9.5H9.5V2.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M9.5 22.5H2.5V29.5H9.5V22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M29.5 22.5H22.5V29.5H29.5V22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M29.5 2.5H22.5V9.5H29.5V2.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
