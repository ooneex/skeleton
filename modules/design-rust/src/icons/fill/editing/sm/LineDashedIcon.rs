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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 13L9 13L9 11L15 11L15 13Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 13L1 13L1 11L7 11L7 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 13L17 13L17 11L23 11L23 13Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
