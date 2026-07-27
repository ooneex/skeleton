use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MoveObjUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MoveObjUpIcon(props: MoveObjUpIconProps) -> Element {
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
                d: "M30 30L30 19L2 19L2 30L30 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 16V2.5H15V16H17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9.50003 10.4142L16 3.91418L22.5001 10.4142L23.9143 8.99997L16 1.08576L8.08582 8.99997L9.50003 10.4142Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
