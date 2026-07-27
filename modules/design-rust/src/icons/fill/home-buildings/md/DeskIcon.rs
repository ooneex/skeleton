use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DeskIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DeskIcon(props: DeskIconProps) -> Element {
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
                d: "M3 15L3 29L0.999999 29L1 15L3 15Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31 15L31 29L29 29L29 15L31 15Z",
                fill: "currentColor",
            }
            path {
                d: "M27 3C29.2091 3 31 4.79086 31 7L31 9L1 9L1 7C1 4.79086 2.79086 3 5 3L27 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 11L15 11V19L1 19V11ZM10 16V14H6V16H10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 11L31 11V19L17 19V11ZM26 16V14H22V16H26Z",
                fill: "currentColor",
            }
        }
    }
}
