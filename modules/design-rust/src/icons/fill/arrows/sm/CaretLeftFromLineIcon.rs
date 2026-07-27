use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftFromLineIcon(props: CaretLeftFromLineIconProps) -> Element {
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
                d: "M19 22L19 2L21 2L21 22L19 22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M17 21.8685L2.19722 12L17 2.1315L17 21.8685Z",
                fill: "currentColor",
            }
        }
    }
}
