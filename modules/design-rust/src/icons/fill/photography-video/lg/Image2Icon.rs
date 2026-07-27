use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Image2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Image2Icon(props: Image2IconProps) -> Element {
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
                d: "M30.4673 13.9753L45.6807 42.0001H2.10181L13.9647 24.7001L19.6183 32.2579L30.4673 13.9753Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8 12C8 8.68629 10.6863 6 14 6C17.3137 6 20 8.68629 20 12C20 15.3137 17.3137 18 14 18C10.6863 18 8 15.3137 8 12Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
