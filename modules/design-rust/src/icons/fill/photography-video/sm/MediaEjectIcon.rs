use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaEjectIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaEjectIcon(props: MediaEjectIconProps) -> Element {
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
                d: "M2 19L22 19L22 21L2 21L2 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.13148 17L12 2.19722L21.8685 17L2.13148 17Z",
                fill: "currentColor",
            }
        }
    }
}
