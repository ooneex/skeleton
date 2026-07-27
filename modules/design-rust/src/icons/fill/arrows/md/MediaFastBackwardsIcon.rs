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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 4.5V27.5L15 16L30 4.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 4.5V27.5L0 16L15 4.5Z",
                fill: "currentColor",
            }
        }
    }
}
