use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ExpandIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ExpandIcon(props: ExpandIconProps) -> Element {
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
                d: "M5 4C4.44772 4 4 4.44772 4 5V9H2V5C2 3.34315 3.34315 2 5 2H9V4H5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M15 2H19C20.6569 2 22 3.34315 22 5V9H20V5C20 4.44772 19.5523 4 19 4H15V2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M22 15V19C22 20.6569 20.6569 22 19 22H15V20H19C19.5523 20 20 19.5523 20 19V15H22Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 15V19C4 19.5523 4.44772 20 5 20H9V22H5C3.34315 22 2 20.6569 2 19V15H4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
