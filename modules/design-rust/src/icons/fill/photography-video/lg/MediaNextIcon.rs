use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaNextIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaNextIcon(props: MediaNextIconProps) -> Element {
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
                d: "M39 44L39 4L42 4L42 44L39 44Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M6 5.15137L34.8273 24L6.00001 42.8486L6 5.15137Z",
                fill: "currentColor",
            }
        }
    }
}
