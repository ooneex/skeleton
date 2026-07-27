use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PriorityHighestIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PriorityHighestIcon(props: PriorityHighestIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17 21L24 14L31 21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 31L24 24L31 31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M44.5061 26.1212L26.1213 44.506C24.9497 45.6775 23.0503 45.6775 21.8787 44.506L3.49391 26.1212C2.32233 24.9496 2.32233 23.0501 3.49391 21.8786L21.8787 3.49378C23.0503 2.32221 24.9497 2.32221 26.1213 3.49378L44.5061 21.8786C45.6777 23.0501 45.6777 24.9496 44.5061 26.1212Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
