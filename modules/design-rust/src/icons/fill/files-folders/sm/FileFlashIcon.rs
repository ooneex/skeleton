use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileFlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileFlashIcon(props: FileFlashIconProps) -> Element {
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
                d: "M14 23H20V21H16V14H14V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 14H12V16H8V17.5H11V19.5H8V23H6V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.0784 1C10.2828 1 9.51972 1.31607 8.95711 1.87868L3.87868 6.95711C3.31607 7.51972 3 8.28278 3 9.07843V12H21V4C21 2.34315 19.6569 1 18 1H11.0784ZM11 9H5L11 3V9Z",
                fill: "currentColor",
            }
        }
    }
}
