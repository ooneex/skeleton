use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft4Icon(props: ShareLeft4IconProps) -> Element {
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
                d: "M7 33V41H44V44H4V33H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 28.6213L8.8787 16.5L21 4.37866L23.1213 6.49998L13.1213 16.5L23.1213 26.5L21 28.6213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 35L44 25.5C44 19.701 39.299 15 33.5 15L10.9999 15L10.9999 18L33.5 18C37.6421 18 41 21.3579 41 25.5L41 35L44 35Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
