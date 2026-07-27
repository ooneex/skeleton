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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 3L30 5L2 5L2 3L30 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2.13147 29L16 8.19723L29.8685 29L2.13147 29Z",
                fill: "currentColor",
            }
        }
    }
}
