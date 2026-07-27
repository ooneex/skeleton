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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M21.4143 20L4.70718 3.29286L3.29297 4.70708L20.0001 21.4142L21.4143 20Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M5 12V5H12V3H3V12H5Z",
                fill: "currentColor",
            }
        }
    }
}
