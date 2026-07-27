use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlignLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlignLeftIcon(props: AlignLeftIconProps) -> Element {
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
                d: "M3 46L3 2L6 2L6 46L3 46Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M44 10L9 10L9 20L44 20L44 10Z",
                fill: "currentColor",
            }
            path {
                d: "M29 28L9 28L9 38L29 38L29 28Z",
                fill: "currentColor",
            }
        }
    }
}
