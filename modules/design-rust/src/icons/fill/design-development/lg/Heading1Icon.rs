use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Heading1IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Heading1Icon(props: Heading1IconProps) -> Element {
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
                d: "M39.4793 9H43.5V39H40.5V12.0164L30.2522 20.1068L28.3932 17.7521L39.4793 9Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 22.5H23V25.5H4V22.5Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M7 9V39H4V9H7Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23 9V39H20V9H23Z",
                fill: "currentColor",
            }
        }
    }
}
