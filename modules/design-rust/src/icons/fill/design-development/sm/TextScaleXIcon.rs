use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextScaleXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextScaleXIcon(props: TextScaleXIconProps) -> Element {
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
                d: "M13 1V16H11V1H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 1H18V3H6V1Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.5 20H2.5V18H21.5V20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 15.0858L22.9142 19L19 22.9142L17.5858 21.5L20.0858 19L17.5858 16.5L19 15.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 15.0858L1.08579 19L5 22.9142L6.41422 21.5L3.91422 19L6.41422 16.5L5 15.0858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
