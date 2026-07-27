use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MergeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MergeIcon(props: MergeIconProps) -> Element {
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
                d: "M2.00006 11H13.634L24.809 22.5H44V25.5H24.8089L13.6339 37H2V34H12.366L22.0834 24L12.366 14H2.00006V11Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M34 11.8787L46.1213 24L34 36.1213L31.8787 34L41.8787 24L31.8787 14L34 11.8787Z",
                fill: "currentColor",
            }
        }
    }
}
