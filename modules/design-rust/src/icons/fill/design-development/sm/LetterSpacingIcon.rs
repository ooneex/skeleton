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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 2L22 22L20 22L20 2L22 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.5 15H8.5V13H15.5V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10.823 6H13.177L17.977 18H15.3295V16.7664L12 8.44258L8.65663 16.801V18H6.02296L10.823 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 2L4 22L2 22L2 2L4 2Z",
                fill: "currentColor",
            }
        }
    }
}
