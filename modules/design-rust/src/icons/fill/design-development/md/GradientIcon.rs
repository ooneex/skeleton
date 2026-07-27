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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M16 3L16 29L2 29L2 3L16 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 3L26 29L18 29L18 3L26 3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 3L30 29L28 29L28 3L30 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
