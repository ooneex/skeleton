use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretUpToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretUpToLineIcon(props: CaretUpToLineIconProps) -> Element {
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
                d: "M2.13147 21L12 6.19722L21.8685 21L2.13147 21Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 5L2 5L2 3L22 3L22 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
