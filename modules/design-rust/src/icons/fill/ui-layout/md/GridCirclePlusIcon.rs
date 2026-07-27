use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridCirclePlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridCirclePlusIcon(props: GridCirclePlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 23V18H23V23H18V25H23V30H25V25H30V23H25Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 24C2 20.6863 4.68629 18 8 18C11.3137 18 14 20.6863 14 24C14 27.3137 11.3137 30 8 30C4.68629 30 2 27.3137 2 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 8C18 4.68629 20.6863 2 24 2C27.3137 2 30 4.68629 30 8C30 11.3137 27.3137 14 24 14C20.6863 14 18 11.3137 18 8Z",
                fill: "currentColor",
            }
        }
    }
}
