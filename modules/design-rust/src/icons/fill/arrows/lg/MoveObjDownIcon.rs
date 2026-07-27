use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjDownIcon(props: MoveObjDownIconProps) -> Element {
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
                d: "M44 4L44 19L4 19L4 4L44 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 24V43H22.5V24H25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 31.8787L23.9999 40.8787L32.9999 31.8787L35.1213 34L23.9999 45.1213L12.8787 34L15 31.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
