use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Microphone4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Microphone4Icon(props: Microphone4IconProps) -> Element {
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
                d: "M15 28H17V32H15V28Z",
                fill: "currentColor",
            }
            path {
                d: "M25 20C25 24.9706 20.9706 29 16 29C11.0294 29 7 24.9706 7 20L7 19L16 19L25 19L25 20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 9L24 16L8 16L8 9C8 4.58172 11.5817 0.999999 16 1C20.4183 1 24 4.58172 24 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 18H28V20H4V18Z",
                fill: "currentColor",
            }
        }
    }
}
