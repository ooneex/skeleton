use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextOutdentRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextOutdentRightIcon(props: TextOutdentRightIconProps) -> Element {
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
                d: "M2 14H11V16H2V14Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 20H22V22H2V20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 8H11V10H2V8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H22V4H2V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 11L21.4999 11L21.5 13L20.0001 13.0001L13 13L13 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.8431 16.2426L20.0858 12L15.8431 7.75737L17.2573 6.34315L22.9142 12L17.2573 17.6569L15.8431 16.2426Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
