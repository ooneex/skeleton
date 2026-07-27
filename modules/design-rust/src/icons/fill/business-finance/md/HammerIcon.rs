use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HammerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HammerIcon(props: HammerIconProps) -> Element {
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
                d: "M23 8.58582L28.4142 14L27 15.4142L21.5858 10L23 8.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13.5858 9.07111L22.071 0.585838L27.7279 6.24268L19.2426 14.7279L13.5858 9.07111Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 15H10V17H6V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 9.58582L11.9142 12.5L10.5 13.9142L7.58578 11L9 9.58582Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M29 19H2V20C2 23.3137 4.68629 26 8 26H11V30H24V28C24 25.7909 25.7909 24 28 24H29V19Z",
                fill: "currentColor",
            }
        }
    }
}
