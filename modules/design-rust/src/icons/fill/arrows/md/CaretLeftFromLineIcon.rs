use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftFromLineIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftFromLineIcon(props: CaretLeftFromLineIconProps) -> Element {
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
                d: "M29 30L27 30L27 2L29 2L29 30Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M23 28L23 4L5 16L23 28Z",
                fill: "currentColor",
            }
        }
    }
}
