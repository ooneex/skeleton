use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListTreeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListTreeIcon(props: ListTreeIconProps) -> Element {
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
                d: "M7 9.5H17V12.5H7V9.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 22.4998H17V25.4998H7V22.4998Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M9 2V35.5H17V38.5H6V2H9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M44 19H20V29H44V19Z",
                fill: "currentColor",
            }
            path {
                d: "M44 6H20V16H44V6Z",
                fill: "currentColor",
            }
            path {
                d: "M44 32H20V42H44V32Z",
                fill: "currentColor",
            }
        }
    }
}
