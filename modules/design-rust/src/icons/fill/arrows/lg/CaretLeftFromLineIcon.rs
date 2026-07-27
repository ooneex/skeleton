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
                d: "M34 41L34 7L8 24L34 41Z",
                fill: "currentColor",
            }
        }
    }
}
