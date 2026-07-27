use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDownFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDownFromLineIcon(props: ArrowDownFromLineIconProps) -> Element {
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
                d: "M15 8L15 29H17L17 8L15 8Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6.99991 18.5858L15.9999 27.5858L24.9999 18.5858L26.4141 20L15.9999 30.4142L5.58569 20L6.99991 18.5858Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M30 3L30 5L2 5L2 3L30 3Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
