use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct JudaismIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn JudaismIcon(props: JudaismIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 4L32.844 18.682L41.688 34H24H6.31201L15.156 18.682L24 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
            path {
                d: "M24 44L41.688 14H6.31201L24 44Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
        }
    }
}
