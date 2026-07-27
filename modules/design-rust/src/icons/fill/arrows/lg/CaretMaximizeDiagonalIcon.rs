use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretMaximizeDiagonalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretMaximizeDiagonalIcon(props: CaretMaximizeDiagonalIconProps) -> Element {
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
                d: "M39.3587 8.6414L35.9806 28.9097L19.0904 12.0194L39.3587 8.6414Z",
                fill: "currentColor",
            }
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M8.64131 39.3586L12.0194 19.0903L28.9096 35.9806L8.64131 39.3586Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
