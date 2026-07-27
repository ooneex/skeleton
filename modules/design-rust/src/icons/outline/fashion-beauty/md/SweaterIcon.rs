use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SweaterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SweaterIcon(props: SweaterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.3889 4L21.7778 3H10.2222L6.61108 4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 26H5C3.89543 26 3 25.1046 3 24V8.04322C3 6.24504 4.19992 4.66787 5.93294 4.18818L9.46995 3.20915L10.0705 4.72404C11.034 7.1542 13.3833 8.75 15.9975 8.75V8.75C18.6142 8.75 20.9652 7.15118 21.927 4.71764L22.5246 3.20529L26.0684 4.18747C27.8007 4.66761 29 6.24447 29 8.04216V24C29 25.1046 28.1046 26 27 26H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 14V29H24V14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 17H20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
