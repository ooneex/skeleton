use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GridSystemIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GridSystemIcon(props: GridSystemIconProps) -> Element {
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
                d: "M15 4L15 15L2 15L2 4L15 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 4L30 15L17 15L17 4L30 4Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 17L30 28L2 28L2 17L30 17Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
