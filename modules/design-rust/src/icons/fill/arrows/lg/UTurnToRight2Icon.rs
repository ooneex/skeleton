use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct UTurnToRight2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn UTurnToRight2Icon(props: UTurnToRight2IconProps) -> Element {
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
                d: "M7 29L7 10C7 8.34315 8.34315 7 10 7L24 7L24 4L10 4C6.6863 4 4 6.68629 4 10L4 29C4 32.3137 6.68629 35 10 35L42 35L42 32L10 32C8.34315 32 7 30.6569 7 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M29.8787 23.5L39.8787 33.5L29.8787 43.5L32 45.6213L44.1213 33.5L32 21.3787L29.8787 23.5Z",
                fill: "currentColor",
            }
        }
    }
}
