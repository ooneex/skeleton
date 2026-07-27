use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowTriangleLineRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowTriangleLineRightIcon(props: ArrowTriangleLineRightIconProps) -> Element {
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
                d: "M2 15H19V17H2V15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17.5 7L30 16L17.5 25V7Z",
                fill: "currentColor",
            }
        }
    }
}
