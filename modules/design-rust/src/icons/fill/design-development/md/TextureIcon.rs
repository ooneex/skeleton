use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextureIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextureIcon(props: TextureIconProps) -> Element {
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
                d: "M30.4142 2.99991L3.00003 30.4141L1.58582 28.9999L29 1.58569L30.4142 2.99991Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 10.9999L11 30.4141L9.58582 28.9999L29 9.58569L30.4142 10.9999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 18.9999L19 30.4141L17.5858 28.9999L29 17.5857L30.4142 18.9999Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30.4142 26.9999L27 30.4141L25.5858 28.9999L29 25.5857L30.4142 26.9999Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22.4142 2.99991L3.00003 22.4141L1.58582 20.9999L21 1.58569L22.4142 2.99991Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14.4142 2.99991L3.00003 14.4141L1.58582 12.9999L13 1.58569L14.4142 2.99991Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.41424 2.99991L3.00003 6.41412L1.58582 4.99991L5.00003 1.58569L6.41424 2.99991Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
