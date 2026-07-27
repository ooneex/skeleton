use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignHorizontalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignHorizontalIcon(props: AlignHorizontalIconProps) -> Element {
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
                d: "M11 6L13 6L13 0L11 8.74228e-08L11 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M13 15L13 9L11 9L11 15L13 15Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 24L13 24L13 18L11 18L11 24Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M3 19L21 19L21 14L3 14L3 19Z",
                fill: "currentColor",
            }
            path {
                d: "M6 10L18 10L18 5L6 5L6 10Z",
                fill: "currentColor",
            }
        }
    }
}
