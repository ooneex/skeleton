use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownToLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownToLineIcon(props: ArrowDownToLineIconProps) -> Element {
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
                d: "M15 2L15 23H17L17 2L15 2Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7.00003 12.5858L16 21.5858L25 12.5858L26.4142 14L16 24.4142L5.58582 14L7.00003 12.5858Z",
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
