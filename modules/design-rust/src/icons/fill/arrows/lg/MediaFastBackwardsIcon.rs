use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaFastBackwardsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaFastBackwardsIcon(props: MediaFastBackwardsIconProps) -> Element {
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
                d: "M44 7.9364V40.0635L22.3862 24L44 7.9364Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 7.9364V40.0635L1.38617 24L23 7.9364Z",
                fill: "currentColor",
            }
        }
    }
}
