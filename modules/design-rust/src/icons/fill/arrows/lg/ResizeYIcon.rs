use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ResizeYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ResizeYIcon(props: ResizeYIconProps) -> Element {
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
                d: "M22.5 40L22.5 8L25.5 8L25.5 40L22.5 40Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.1213 32L24 42.1213L13.8787 32L16 29.8787L24 37.8787L32 29.8787L34.1213 32Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34.1213 16L24 5.8787L13.8787 16L16 18.1213L24 10.1213L32 18.1213L34.1213 16Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 5L6 5L6 2L42 2L42 5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M42 46L6 46L6 43L42 43L42 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
