use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BorderWidthIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BorderWidthIcon(props: BorderWidthIconProps) -> Element {
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
                d: "M44 24L4 24L4 4L44 4L44 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 38L4 38L4 27L44 27L44 38Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 44L4 44L4 41L44 41L44 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
