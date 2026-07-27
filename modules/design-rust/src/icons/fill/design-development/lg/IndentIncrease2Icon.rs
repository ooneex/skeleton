use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct IndentIncrease2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn IndentIncrease2Icon(props: IndentIncrease2IconProps) -> Element {
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
                d: "M4.22899 15.3503L12.8787 24L4.22888 32.6498L6.3502 34.7711L17.1213 24L6.35031 13.229L4.22899 15.3503Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 16.5H22V19.5H44V16.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 40.5H22V43.5H44V40.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 4.5H22V7.5H44V4.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 28.5H22V31.5H44V28.5Z",
                fill: "currentColor",
            }
        }
    }
}
