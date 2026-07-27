use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ToolSelectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ToolSelectIcon(props: ToolSelectIconProps) -> Element {
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
                d: "M1 15L1 10.9999L3 10.9999L3 15L1 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 15L29 10.9999L31 10.9999L31 15L29 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29 21L29 16.9999L31 16.9999L31 21L29 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 21L1 16.9999L3 16.9999L3 21L1 21Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0001 5L10.0001 5L10.0001 3L15.0001 3L15.0001 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 5L16.9999 5L16.9999 3L22 3L22 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 29L16.9999 29L16.9999 27L22 27L22 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15.0001 29L10.0001 29L10.0001 27L15.0001 27L15.0001 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 5C3.89543 5 3 5.89543 3 7V9H1V7C1 4.79086 2.79086 3 5 3H8V5H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 3H27C29.2091 3 31 4.79086 31 7V9H29V7C29 5.89543 28.1046 5 27 5H24V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 29H27C29.2091 29 31 27.2091 31 25V23H29V25C29 26.1046 28.1046 27 27 27H24V29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 23V25C3 26.1046 3.89543 27 5 27H8V29H5C2.79086 29 1 27.2091 1 25V23H3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
