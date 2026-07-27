use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Dresser2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Dresser2Icon(props: Dresser2IconProps) -> Element {
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
                d: "M7 20V24H5V20H7Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 20V24H17V20H19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 11H2V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V11ZM10 5V7H14V5H10Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 19C22 20.6569 20.6569 22 19 22L5 22C3.34315 22 2 20.6569 2 19V13H22V19ZM10 16V18H14V16H10Z",
                fill: "currentColor",
            }
        }
    }
}
