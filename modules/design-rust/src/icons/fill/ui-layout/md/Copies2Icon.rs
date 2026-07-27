use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Copies2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Copies2Icon(props: Copies2IconProps) -> Element {
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
                d: "M7 4L7 2L25 2L25 4L7 4Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 8L4 6L28 6L28 8L4 8Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M27.8471 30L4.15284 30L0.8195 10L31.1804 10L27.8471 30Z",
                fill: "currentColor",
            }
        }
    }
}
