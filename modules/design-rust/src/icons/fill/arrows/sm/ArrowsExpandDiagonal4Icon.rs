use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandDiagonal4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandDiagonal4Icon(props: ArrowsExpandDiagonal4IconProps) -> Element {
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
                d: "M21.9143 20.5L3.50016 2.08576L2.08594 3.49996L20.5001 21.9142L21.9143 20.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 4L4 4L4 12L2 12L2 2L12 2L12 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M12 20L20 20L20 12L22 12L22 22L12 22L12 20Z",
                fill: "currentColor",
            }
        }
    }
}
