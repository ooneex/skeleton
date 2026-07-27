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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 8H1V16H7L7 8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M23 8H17V16H23V8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 3L23 21L0.999999 21L1 3L23 3ZM21 5L3 5L3 19L21 19L21 5Z",
                fill: "currentColor",
            }
            path {
                d: "M15 7H9V17H15L15 7Z",
                fill: "currentColor",
            }
        }
    }
}
