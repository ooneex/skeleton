use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ObjsUngroupIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ObjsUngroupIcon(props: ObjsUngroupIconProps) -> Element {
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
                d: "M27.5 26.5L27.5 9.5L30.5 9.5L30.5 26.5L27.5 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.5 8.5L9.5 8.5L9.5 5.5L26.5 5.5L26.5 8.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5.5 26.5L5.5 9.5L8.5 9.5L8.5 26.5L5.5 26.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.5 30.5L9.5 30.5L9.5 27.5L26.5 27.5L26.5 30.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 46L18 46L18 33.5L21 33.5L21 43L43 43L43 21L33.5 21L33.5 18L46 18L46 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 2L12 12L2 12L2 2L12 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 24L12 34L2 34L2 24L12 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 2L34 12L24 12L24 2L34 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 24L34 34L24 34L24 24L34 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.5 21L21 21L21 24.5L18 24.5L18 18L24.5 18L24.5 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
