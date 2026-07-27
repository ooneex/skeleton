use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LetterSpacingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LetterSpacingIcon(props: LetterSpacingIconProps) -> Element {
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
                d: "M21 20H11V18H21V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 2L29 30L27 30L27 2L29 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2L5 30L3 30L3 2L5 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.7403 7H17.2597L24.4785 25H21.8891V23.9165L16 9.23201L10.1247 23.8821V25H7.52154L14.7403 7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
