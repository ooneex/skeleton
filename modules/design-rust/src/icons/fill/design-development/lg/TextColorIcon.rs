use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextColorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextColorIcon(props: TextColorIconProps) -> Element {
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
                d: "M4 34.5C4 32.567 5.567 31 7.5 31H40.5C42.433 31 44 32.567 44 34.5V40.5C44 42.433 42.433 44 40.5 44H7.5C5.567 44 4 42.433 4 40.5V34.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.5 21.5H17.5V18.5H30.5V21.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4112 4H25.5915L34.8519 28H30.8244V25.8957L23.997 8.20112L17.0884 25.9753V28H13.0828L22.4112 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
