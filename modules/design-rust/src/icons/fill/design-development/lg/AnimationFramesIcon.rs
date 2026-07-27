use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AnimationFramesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AnimationFramesIcon(props: AnimationFramesIconProps) -> Element {
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
                d: "M3 15L3 33L12 33L12 15L3 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36 15L36 33L45 33L45 15L36 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 42L46 42L46 6L2 6L2 42ZM5 9L43 9L43 39L5 39L5 9Z",
                fill: "currentColor",
            }
            path {
                d: "M17 36L17 12L31 12L31 36L17 36Z",
                fill: "currentColor",
            }
        }
    }
}
