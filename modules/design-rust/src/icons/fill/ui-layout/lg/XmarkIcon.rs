use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct XmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn XmarkIcon(props: XmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.1215 24L41.1215 8.99998L39.0002 6.87866L24.0002 21.8787L9.00023 6.87866L6.87891 8.99998L21.8789 24L6.87891 39L9.00023 41.1213L24.0002 26.1213L39.0002 41.1213L41.1215 39L26.1215 24Z",
                fill: "currentColor",
            }
        }
    }
}
