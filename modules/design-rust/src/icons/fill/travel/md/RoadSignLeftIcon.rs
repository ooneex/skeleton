use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadSignLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadSignLeftIcon(props: RoadSignLeftIconProps) -> Element {
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
                d: "M14 2L18 2L18 9L14 9V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 19L18 19L18 30L14 30L14 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M28 17L6.54202 17L1.79692 11.5L6.54202 6L28 6L28 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
