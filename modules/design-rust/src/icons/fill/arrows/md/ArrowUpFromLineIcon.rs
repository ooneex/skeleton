use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowUpFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowUpFromLineIcon(props: ArrowUpFromLineIconProps) -> Element {
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
                d: "M15 24L15 3H17L17 24L15 24Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.99991 13.4142L15.9999 4.41418L24.9999 13.4142L26.4141 12L15.9999 1.58576L5.58569 12L6.99991 13.4142Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 29L30 27L2 27L2 29L30 29Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
