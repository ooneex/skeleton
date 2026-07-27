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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 30L13 30L13 2L2 2L2 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 17L29.5 17L29.5 15L16 15L16 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.5858 9.50003L28.0858 16L21.5858 22.5001L23 23.9143L30.9142 16L23 8.08582L21.5858 9.50003Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
