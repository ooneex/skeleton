use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LuggageIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LuggageIcon(props: LuggageIconProps) -> Element {
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
                d: "M7 19V23H5V19H7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 19V23H17V19H19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 3C8 1.89543 8.89543 1 10 1H14C15.1046 1 16 1.89543 16 3V7H14V3H10V7H8V3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 12H21V21H3V12ZM10 14V16H14V14H10Z",
                fill: "currentColor",
            }
            path {
                d: "M3 8C3 6.34315 4.34315 5 6 5H18C19.6569 5 21 6.34315 21 8V10H3V8Z",
                fill: "currentColor",
            }
        }
    }
}
