use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTriangleLineDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTriangleLineDownIcon(props: ArrowTriangleLineDownIconProps) -> Element {
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
                d: "M15 2L15 19L17 19L17 2L15 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 17.5L16 30L25 17.5L7 17.5Z",
                fill: "currentColor",
            }
        }
    }
}
