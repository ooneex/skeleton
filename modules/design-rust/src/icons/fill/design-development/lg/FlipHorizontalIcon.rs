use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FlipHorizontalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FlipHorizontalIcon(props: FlipHorizontalIconProps) -> Element {
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
                d: "M22.5 2L25.5 2L25.5 46L22.5 46L22.5 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19.5 8L19.5 38.0002L2.26855 38.0002L19.5 8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28.5 8L28.5 38.0001L45.7314 38.0001L28.5 8Z",
                fill: "currentColor",
            }
        }
    }
}
