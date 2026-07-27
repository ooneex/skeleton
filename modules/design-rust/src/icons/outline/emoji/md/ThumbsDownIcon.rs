use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ThumbsDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ThumbsDownIcon(props: ThumbsDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 20V3.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13.4091 29.2526L10.2803 20L3 20L3 4L20.9325 2.29213C22.7403 2.11996 24.4373 3.18724 25.0651 4.89127L29.5126 16.9629C30.2342 18.9214 28.7849 21 26.6976 21L18 21L18 28.4974C18 29.7235 17.0601 30.745 15.8382 30.8468C14.7584 30.9368 13.7562 30.2791 13.4091 29.2526Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
