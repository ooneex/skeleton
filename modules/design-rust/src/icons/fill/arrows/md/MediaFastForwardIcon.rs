use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaFastForwardIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaFastForwardIcon(props: MediaFastForwardIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 4.5V27.5L17 16L2 4.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 4.5V27.5L32 16L17 4.5Z",
                fill: "currentColor",
            }
        }
    }
}
