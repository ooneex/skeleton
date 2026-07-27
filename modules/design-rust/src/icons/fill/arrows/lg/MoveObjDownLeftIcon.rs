use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjDownLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjDownLeftIcon(props: MoveObjDownLeftIconProps) -> Element {
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
                d: "M44 4L44 24L24 24L24 4L44 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5 26.3787L4.43936 41.4393L6.56068 43.5607L21.6213 28.5L19.5 26.3787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 41L7.00003 41V29L4.00003 29L4.00003 44L19 44L19 41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
