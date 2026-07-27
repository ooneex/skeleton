use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HybridCarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HybridCarIcon(props: HybridCarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 19L13 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 19L19 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M25.8995 26.8995C31.3668 21.4321 31.3668 12.5678 25.8995 7.10048C20.4322 1.63314 11.5678 1.63314 6.10051 7.10048C0.633165 12.5678 0.633165 21.4321 6.10051 26.8995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.63604 10.6361C13.1508 7.12134 18.8492 7.12134 22.364 10.6361",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 19L10 23C10 26.3137 12.6863 29 16 29C19.3137 29 22 26.3137 22 23L22 19L10 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
