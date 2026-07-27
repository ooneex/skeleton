use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileFlvIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileFlvIcon(props: FileFlvIconProps) -> Element {
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
                d: "M9 23H15V21H11V14H9V23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.7543 23H17.2457L14.6742 14H17.0852V15.1583L18.5 20.1099L19.9216 15.134V14H22.3257L19.7543 23Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 14H8V16H4V17.5H7V19.5H4V23H2V14Z",
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
