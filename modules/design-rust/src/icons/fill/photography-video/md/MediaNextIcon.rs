use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaNextIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaNextIcon(props: MediaNextIconProps) -> Element {
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
                d: "M29 2L27 2L27 30L29 30L29 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 29.8685L23.8028 16L3 2.13149L3 29.8685Z",
                fill: "currentColor",
            }
        }
    }
}
