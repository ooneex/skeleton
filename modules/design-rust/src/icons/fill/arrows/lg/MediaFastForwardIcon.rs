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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 7.9364V40.0635L25.6138 24L4 7.9364Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25 7.9364V40.0635L46.6138 24L25 7.9364Z",
                fill: "currentColor",
            }
        }
    }
}
