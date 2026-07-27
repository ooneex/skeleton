use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen4Icon(props: Pen4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.01596 20.516L11.5431 27.043",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M17.9167 7.65637L24.4369 14.1765",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M10.9853 27.5616L28.0858 10.4611C28.8668 9.68003 28.8668 8.4137 28.0858 7.63265L24.4142 3.96108C23.6332 3.18003 22.3668 3.18002 21.5858 3.96107L4.4853 21.0616L3 29.0044L10.9853 27.5616Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
