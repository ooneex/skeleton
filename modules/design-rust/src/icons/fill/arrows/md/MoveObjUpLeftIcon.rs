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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 30L16 30L16 16L30 16L30 30Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.0072 14.4213L2.30014 3.71426L3.71435 2.30005L14.4214 13.0071L13.0072 14.4213Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 2.00002L1.99998 2L2.00002 13L4.00002 13L3.99999 4.00267L13 4.00268L13 2.00002Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
