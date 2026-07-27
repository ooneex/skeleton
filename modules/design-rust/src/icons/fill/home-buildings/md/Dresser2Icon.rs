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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 28V32H7V28H9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 28V32H23V28H25Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 15H30V6C30 3.79086 28.2091 2 26 2H6C3.79086 2 2 3.79086 2 6V15ZM13 6V8H19V6H13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 30C28.2091 30 30 28.2091 30 26V17H2V26C2 28.2091 3.79086 30 6 30L26 30ZM13 21V23H19V21H13Z",
                fill: "currentColor",
            }
        }
    }
}
