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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M3 2L21 2L21 4L3 4L3 2Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M20.8672 22L23.1529 6L0.846924 6L3.13264 22L20.8672 22Z",
                fill: "currentColor",
            }
        }
    }
}
