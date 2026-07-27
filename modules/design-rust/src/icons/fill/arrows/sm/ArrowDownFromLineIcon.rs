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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M2 4L22 4L22 2L2 2L2 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M11 6L11 21L13 21L13 6L11 6Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M18.0001 13.5858L12.0001 19.5858L6.00009 13.5858L4.58588 15L12.0001 22.4142L19.4143 15L18.0001 13.5858Z",
                fill: "currentColor",
            }
        }
    }
}
