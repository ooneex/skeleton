use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaPlayIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaPlayIcon(props: MediaPlayIconProps) -> Element {
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
                d: "M5 21.7232L22.0156 12L5 2.27685L5 21.7232Z",
                fill: "currentColor",
            }
        }
    }
}
