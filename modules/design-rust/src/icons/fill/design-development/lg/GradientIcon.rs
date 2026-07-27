use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GradientIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GradientIcon(props: GradientIconProps) -> Element {
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
                d: "M24 4L24 44L4 44L4 4L24 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 4L38 44L27 44L27 4L38 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 4L44 44L41 44L41 4L44 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
