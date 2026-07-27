use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsFromLineYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsFromLineYIcon(props: ArrowsFromLineYIconProps) -> Element {
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
                d: "M44 22.5L4 22.5L4 25.5L44 25.5L44 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32 14.1213L24 6.12134L16 14.1213L13.8787 12L24 1.8787L34.1213 12L32 14.1213Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M32 33.8787L24 41.8787L16 33.8787L13.8787 36L24 46.1213L34.1213 36L32 33.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 44L22.5 44L22.5 30L25.5 30L25.5 44Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 4L22.5 4L22.5 18L25.5 18L25.5 4Z",
                fill: "currentColor",
            }
        }
    }
}
