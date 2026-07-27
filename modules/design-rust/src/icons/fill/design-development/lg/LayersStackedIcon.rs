use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LayersStackedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LayersStackedIcon(props: LayersStackedIconProps) -> Element {
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
                d: "M7.38184 19H45.6179L40.6179 29H2.38184L7.38184 19Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.38184 6H45.6179L40.6179 16H2.38184L7.38184 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.38184 32H45.6179L40.6179 42H2.38184L7.38184 32Z",
                fill: "currentColor",
            }
        }
    }
}
