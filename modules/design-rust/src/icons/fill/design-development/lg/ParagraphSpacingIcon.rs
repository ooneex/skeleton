use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParagraphSpacingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParagraphSpacingIcon(props: ParagraphSpacingIconProps) -> Element {
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
                d: "M28.6625 22.2161L24 26.8787L19.3375 22.2161L17.2162 24.3375L24 31.1213L30.7838 24.3374L28.6625 22.2161Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.6725 17.7939L24 13.1213L19.3274 17.7939L17.2061 15.6726L24 8.8787L30.7939 15.6726L28.6725 17.7939Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 3H44V6H4V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 34H44V37H4V34Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 42.5H44V45.5H4V42.5Z",
                fill: "currentColor",
            }
        }
    }
}
