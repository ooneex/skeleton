use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeIncreaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeIncreaseIcon(props: TextSizeIncreaseIconProps) -> Element {
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
                d: "M25.5 6V42H22.5V6H25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M41 9L7 9.00001L7 6.00001L41 6L41 9Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 23.5H46V26.5H30V23.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M36.5 33L36.5 17L39.5 17L39.5 33L36.5 33Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
