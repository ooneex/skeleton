use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConstructionSignIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConstructionSignIcon(props: ConstructionSignIconProps) -> Element {
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
                d: "M11 24L11 29H5.02808L5.02808 24H11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26.9719 24L26.9719 29H21L21 24H26.9719Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 2H11V4H5V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 2H27V4H21L21 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 6V22H31V6H1ZM10.3819 20H12.618L6.61801 8H4.38194L10.3819 20ZM11.8819 8L17.8819 20H20.118L14.118 8H11.8819ZM19.382 8L25.382 20H27.618L21.618 8H19.382Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 28H13V30H3V28Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 28H29V30H19V28Z",
                fill: "currentColor",
            }
        }
    }
}
