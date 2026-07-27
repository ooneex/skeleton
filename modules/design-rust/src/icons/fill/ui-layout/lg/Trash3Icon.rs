use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trash3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trash3Icon(props: Trash3IconProps) -> Element {
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
                d: "M21 5C20.4477 5 20 5.44772 20 6V9H17V6C17 3.79086 18.7909 2 21 2H27C29.2091 2 31 3.79086 31 6V9H28V6C28 5.44772 27.5523 5 27 5H21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 8H44V16H4V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.91699 19H39.0834L37.3651 40.4785C37.1156 43.5967 34.5124 46 31.3842 46H16.6162C13.488 46 10.8847 43.5967 10.6353 40.4785L8.91699 19Z",
                fill: "currentColor",
            }
        }
    }
}
