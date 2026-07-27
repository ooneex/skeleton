use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DirectionSignRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DirectionSignRightIcon(props: DirectionSignRightIconProps) -> Element {
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
                d: "M10 2L10 4L14 4L14 2L10 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M10 15L10 22L14 22L14 15L10 15Z",
                fill: "currentColor",
            }
            path {
                d: "M22.3171 9.5L19.3171 6L3 6L3 13L19.3171 13L22.3171 9.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
