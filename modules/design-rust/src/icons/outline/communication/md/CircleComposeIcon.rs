use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleComposeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleComposeIcon(props: CircleComposeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20.692,2.823c-1.469-.523-3.044-.823-4.692-.823-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14c0-1.648-.3-3.223-.823-4.692",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "30",
                y1: "2",
                x2: "15",
                y2: "17",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
