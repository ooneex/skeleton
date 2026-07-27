use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HashtagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HashtagIcon(props: HashtagIconProps) -> Element {
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
                d: "M3 31.5H42V34.5H3V31.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 13.5H45V16.5H6V13.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.7927 2.86581L12.1342 45.7926L9.20736 45.1341L18.8659 2.20728L21.7927 2.86581Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38.7927 2.86581L29.1342 45.7926L26.2074 45.1341L35.8659 2.20728L38.7927 2.86581Z",
                fill: "currentColor",
            }
        }
    }
}
