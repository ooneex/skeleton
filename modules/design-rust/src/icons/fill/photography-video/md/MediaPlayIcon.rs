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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 29.7232L30.0156 16L6 2.27681L6 29.7232Z",
                fill: "currentColor",
            }
        }
    }
}
