use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StorageShelfIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StorageShelfIcon(props: StorageShelfIconProps) -> Element {
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
                d: "M10 6H18V11H10V6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 14H14V19H6V14Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 12H3V10H21V12Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21 20H3V18H21V20Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 22L2 5C2 3.34315 3.34315 2 5 2L19 2C20.6569 2 22 3.34315 22 5L22 22L20 22L20 5C20 4.44772 19.5523 4 19 4L5 4C4.44772 4 4 4.44772 4 5L4 22L2 22Z",
                fill: "currentColor",
            }
        }
    }
}
