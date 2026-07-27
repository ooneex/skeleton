use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilePdfIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilePdfIcon(props: FilePdfIconProps) -> Element {
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
                d: "M11.0784 1C10.2828 1 9.51972 1.31607 8.95711 1.87868L3.87868 6.95711C3.31607 7.51972 3 8.28278 3 9.07843V12H21V4C21 2.34315 19.6569 1 18 1H11.0784ZM11 9H5L11 3V9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M1 14H4.5C6.433 14 8 15.567 8 17.5C8 19.433 6.433 21 4.5 21H3V23H1V14ZM3 19H4.5C5.32843 19 6 18.3284 6 17.5C6 16.6716 5.32843 16 4.5 16H3V19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 14H11.5C13.9853 14 16 16.0147 16 18.5C16 20.9853 13.9853 23 11.5 23H9V14ZM11 16V21H11.5C12.8807 21 14 19.8807 14 18.5C14 17.1193 12.8807 16 11.5 16H11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 14H23V16H19V17.5H22V19.5H19V23H17V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
