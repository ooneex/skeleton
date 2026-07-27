use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ObjsGroupIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ObjsGroupIcon(props: ObjsGroupIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 2H22V22H2V2ZM4 4V20H20V4H4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 6H18V14H16V10C16 8.89543 15.1046 8 14 8H10V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 10H14V18H6V10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
