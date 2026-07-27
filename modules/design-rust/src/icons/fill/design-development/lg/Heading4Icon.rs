use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading4Icon(props: Heading4IconProps) -> Element {
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
                d: "M39.9938 9H44V26H47.5V29H44V39H41V29H26V26.4734L39.9938 9ZM41 26V12.5428L30.2226 26H41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 22.5H23V25.5H4V22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 9V39H4V9H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 9V39H20V9H23Z",
                fill: "currentColor",
            }
        }
    }
}
