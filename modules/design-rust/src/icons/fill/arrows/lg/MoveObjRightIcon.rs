use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjRightIcon(props: MoveObjRightIconProps) -> Element {
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
                d: "M4 44L19 44L19 4L4 4L4 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 25.5L43 25.5L43 22.5L24 22.5L24 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.8787 15L40.8787 23.9999L31.8787 32.9999L34 35.1213L45.1213 23.9999L34 12.8787L31.8787 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
