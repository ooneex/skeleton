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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 2L30 13L2 13L2 2L30 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 16V29.5H15V16H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.49991 21.5858L15.9999 28.0858L22.4999 21.5858L23.9141 23L15.9999 30.9142L8.08569 23L9.49991 21.5858Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
