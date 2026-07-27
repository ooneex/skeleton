use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TowelRackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TowelRackIcon(props: TowelRackIconProps) -> Element {
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
                d: "M5 18V22H3V18H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 18V22H19V18H21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 18V22H11V18H13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 18V22H7V18H9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 18V22H15V18H17Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 4L19 4L19 6L23 6L23 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 4L0.999999 4L1 6L5 6L5 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 15V2L21 2L21 15H3Z",
                fill: "currentColor",
            }
            path {
                d: "M3 17V20H21V17H3Z",
                fill: "currentColor",
            }
        }
    }
}
