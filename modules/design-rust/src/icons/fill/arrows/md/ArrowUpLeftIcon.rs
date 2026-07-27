use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpLeftIcon(props: ArrowUpLeftIconProps) -> Element {
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
                d: "M29.4142 28L4.70706 3.29286L3.29285 4.70708L28 29.4142L29.4142 28Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 16V5H16V3H3V16H5Z",
                fill: "currentColor",
            }
        }
    }
}
