use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Wardrobe3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Wardrobe3Icon(props: Wardrobe3IconProps) -> Element {
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
                d: "M6.00001 23H18C19.6569 23 21 21.6569 21 20L21 17H3L3.00001 20C3.00001 21.6569 4.34315 23 6.00001 23ZM13.01 21H14.01V19H13.01L11 19H10L10 21L11 21H13.01Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M11 11V15H3V4C3 2.34315 4.34315 1 6 1H11V7H10V11H11Z",
                fill: "currentColor",
            }
            path {
                d: "M21 4L21 15H13V11H14.01L14.01 7H13V1H18C19.6569 1 21 2.34315 21 4Z",
                fill: "currentColor",
            }
        }
    }
}
