use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SortAlphaDescendingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SortAlphaDescendingIcon(props: SortAlphaDescendingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M35.5 3.5V43H32.5V3.5H35.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.5 26H21.5V29.1627L10.4518 41H21.5V44H6.5V40.8373L17.5482 29H6.5V26Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11.7802 4H16.0532L22.5532 22H18.7V20.1625L13.9469 7H13.8865L9.13335 20.1625V22H5.28021L11.7802 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5 18H8.5V15H19.5V18Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 31.8787L34 40.8787L43 31.8787L45.1213 34L34 45.1213L22.8787 34L25 31.8787Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
