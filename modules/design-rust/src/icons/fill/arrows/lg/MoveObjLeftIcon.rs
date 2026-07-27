use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjLeftIcon(props: MoveObjLeftIconProps) -> Element {
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
                d: "M44.0013 44L29.0013 44L29.0013 4L44.0013 4L44.0013 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.0013 25.5L5.00134 25.5L5.00134 22.5L24.0013 22.5L24.0013 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16.1227 15L7.12266 23.9999L16.1227 32.9999L14.0014 35.1213L2.88001 23.9999L14.0014 12.8787L16.1227 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
