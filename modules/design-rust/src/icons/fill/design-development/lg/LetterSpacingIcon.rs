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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M43.5 4L43.5 44L40.5 44L40.5 4L43.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4.5 4L7.5 4L7.5 44L4.5 44L4.5 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.5 29.5H17.5V26.5H30.5V29.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4112 12H25.5915L34.8519 36H30.8244V33.8957L23.997 16.2011L17.0884 33.9753V36H13.0828L22.4112 12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
