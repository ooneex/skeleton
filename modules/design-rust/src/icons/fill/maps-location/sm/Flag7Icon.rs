use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag7IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag7Icon(props: Flag7IconProps) -> Element {
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
                d: "M7 3H15V15H7V3Z",
                fill: "currentColor",
            }
            path {
                d: "M10 17V19H22.477L20.077 13L22.477 7H17V15C17 16.1046 16.1046 17 15 17H10Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 1V23H3V1H5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
