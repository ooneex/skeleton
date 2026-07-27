use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretRightToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretRightToLineIcon(props: CaretRightToLineIconProps) -> Element {
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
                d: "M3 21.8685L17.8028 12L3 2.1315L3 21.8685Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M19 2L19 22L21 22L21 2L19 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
