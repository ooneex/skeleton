use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextPromptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextPromptIcon(props: TextPromptIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.45 21.55L23.5 17L21.55 21.55L17 23.5L21.55 25.45L23.5 30L25.45 25.45L30 23.5L25.45 21.55Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 11H30V13H2V11Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 3H30V5H2V3Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 19H16V21H2V19Z",
                fill: "currentColor",
            }
        }
    }
}
