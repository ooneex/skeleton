use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FullScreen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FullScreen4Icon(props: FullScreen4IconProps) -> Element {
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
                d: "M6 4C4.89528 4 4 4.89528 4 6V11H2V6C2 3.79072 3.79072 2 6 2H11V4H6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 2H26C28.2093 2 30 3.79072 30 6V11H28V6C28 4.89528 27.1047 4 26 4H21V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 21V26C30 28.2093 28.2093 30 26 30H21V28H26C27.1047 28 28 27.1047 28 26V21H30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 21V26C4 27.1047 4.89528 28 6 28H11V30H6C3.79072 30 2 28.2093 2 26V21H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 9H23V23H9V9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
