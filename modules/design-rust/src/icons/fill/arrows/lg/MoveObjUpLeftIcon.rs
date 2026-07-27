use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjUpLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjUpLeftIcon(props: MoveObjUpLeftIconProps) -> Element {
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
                d: "M44 44L24 44L24 24L44 24L44 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.6213 19.5L6.56068 4.43933L4.43936 6.56065L19.5 21.6213L21.6213 19.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.00004 19L7 7L19 7L19 4L3.99999 4L4.00004 19L7.00004 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
