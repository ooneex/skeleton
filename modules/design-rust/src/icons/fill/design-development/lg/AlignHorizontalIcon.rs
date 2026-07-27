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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 11L25.5 2L22.5 2L22.5 11L25.5 11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 29L25.5 19L22.5 19L22.5 29L25.5 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 46L25.5 37L22.5 37L22.5 46L25.5 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M44 39L4 39L4 27L44 27L44 39Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M38 21L11 21L11 9L38 9L38 21Z",
                fill: "currentColor",
            }
        }
    }
}
