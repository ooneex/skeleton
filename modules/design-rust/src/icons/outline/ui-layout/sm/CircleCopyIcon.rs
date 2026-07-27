use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCopyIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCopyIcon(props: CircleCopyIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13.952,4.053c-1.267-1.268-3.018-2.053-4.952-2.053-3.866,0-7,3.134-7,7,0,1.934.785,3.685,2.053,4.952",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            circle {
                cx: "15",
                cy: "15",
                r: "7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
