use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ImagePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ImagePlusIcon(props: ImagePlusIconProps) -> Element {
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
                d: "M13 10.4814L20.7526 19.3415L19.2474 20H13H6.75259L5.24744 19.3415L13 10.4814Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 9C5 7.89543 5.89543 7 7 7C8.10457 7 9 7.89543 9 9C9 10.1046 8.10457 11 7 11C5.89543 11 5 10.1046 5 9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M20 1V11H18V1H20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 5H24V7H14V5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 5C3.44772 5 3 5.44772 3 6L3 18C3 18.5523 3.44772 19 4 19L20 19C20.5523 19 21 18.5523 21 18L21 13H23L23 18C23 19.6569 21.6569 21 20 21L4 21C2.34315 21 1 19.6569 1 18L1 6C1 4.34315 2.34315 3 4 3L12 3V5L4 5Z",
                fill: "currentColor",
            }
        }
    }
}
