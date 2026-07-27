use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CubeAxisIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CubeAxisIcon(props: CubeAxisIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 11.4L16 16L5 11.4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 16V29",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27.3068 24.6315L27 24.5L30.5 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.69323 24.6315L4.99999 24.5L1.5 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 2L16 5.96678V5.30011",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 24.4V10.6L16 6L5 10.6L5 24.4L16 29L27 24.4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
