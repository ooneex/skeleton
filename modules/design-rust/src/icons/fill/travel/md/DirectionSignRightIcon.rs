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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 2L14 2L14 9L18 9V2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18 19L14 19L14 30L18 30L18 19Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 17L25.458 17L30.2031 11.5L25.458 6L4 6L4 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
