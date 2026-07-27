use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjDownRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjDownRightIcon(props: MoveObjDownRightIconProps) -> Element {
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
                d: "M4 4L4 24L24 24L24 4L4 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.5 26.3787L43.5606 41.4393L41.4393 43.5607L26.3787 28.5L28.5 26.3787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 41L41 41V29L44 29L44 44L29 44L29 41Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
