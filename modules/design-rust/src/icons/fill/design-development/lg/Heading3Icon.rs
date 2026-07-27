use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading3Icon(props: Heading3IconProps) -> Element {
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
                d: "M27 9H43V11.8435L33.2275 21H36C40.9706 21 45 25.0294 45 30C45 34.9706 40.9706 39 36 39H27V36H36C39.3137 36 42 33.3137 42 30C42 26.6863 39.3137 24 36 24H29V20.8499L38.4453 12H27V9Z",
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
