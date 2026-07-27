use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsThroughLineYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsThroughLineYIcon(props: ArrowsThroughLineYIconProps) -> Element {
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
                d: "M30 22.5L30 25.5L46 25.5L46 22.5L30 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M24.5 22.5L2 22.5L2 25.5L24.5 25.5L24.5 22.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 17.1213L24 7.12134L14 17.1213L11.8787 15L24 2.8787L36.1213 15L34 17.1213Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 30.8787L24 40.8787L14 30.8787L11.8787 33L24 45.1213L36.1213 33L34 30.8787Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M25.5 5L25.5 43L22.5 43L22.5 5L25.5 5Z",
                fill: "currentColor",
            }
        }
    }
}
