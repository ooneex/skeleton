use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Compass4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Compass4Icon(props: Compass4IconProps) -> Element {
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
                d: "M17 1V4H15V1H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 28V31H15V28H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 17L28 17L28 15L31 15L31 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 17L1 17L1 15L4 15L4 17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.8246 22.8245L27.3743 4.62549L9.17536 9.17524L4.62561 27.3742L22.8246 22.8245ZM16 12.4999C14.067 12.4999 12.5 14.0669 12.5 15.9999C12.5 17.9329 14.067 19.4999 16 19.4999C17.933 19.4999 19.5 17.9329 19.5 15.9999C19.5 14.0669 17.933 12.4999 16 12.4999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
