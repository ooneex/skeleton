use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaStopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaStopIcon(props: MediaStopIconProps) -> Element {
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
                d: "M4 4H28V28H4V4Z",
                fill: "currentColor",
            }
        }
    }
}
