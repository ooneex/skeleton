use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SeparateXIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SeparateXIcon(props: SeparateXIconProps) -> Element {
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
                d: "M29 44L29 4L26 4L26 44L29 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 4L19 44L22 44L22 4L19 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.8787 32L42.8787 24L34.8787 16L37 13.8787L47.1213 24L37 34.1213L34.8787 32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.1213 32L5.12134 24L13.1213 16L11 13.8787L0.878697 24L11 34.1213L13.1213 32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 25.5L3 22.5L16 22.5L16 25.5L3 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M45 25.5L45 22.5L32 22.5L32 25.5L45 25.5Z",
                fill: "currentColor",
            }
        }
    }
}
