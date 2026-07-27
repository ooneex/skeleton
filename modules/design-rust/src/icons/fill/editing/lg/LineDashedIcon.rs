use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LineDashedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LineDashedIcon(props: LineDashedIconProps) -> Element {
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
                d: "M30 25.5L18 25.5L18 22.5L30 22.5L30 25.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M14 25.5L2 25.5L2 22.5L14 22.5L14 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M46 25.5L34 25.5L34 22.5L46 22.5L46 25.5Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
