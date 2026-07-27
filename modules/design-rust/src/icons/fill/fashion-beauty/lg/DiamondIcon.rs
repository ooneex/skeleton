use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiamondIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiamondIcon(props: DiamondIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M45.5703 16H2.42969L9.52441 4H38.4756L45.5703 16ZM11.2734 7L17 15.9961L22.1816 7H11.2734ZM25.8203 7L31 15.9961L36.7266 7H25.8203Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24 45.6289L3.28809 19H44.7119L24 45.6289ZM17.8467 22L24 44L30.1543 22H17.8467Z",
                fill: "currentColor",
            }
        }
    }
}
