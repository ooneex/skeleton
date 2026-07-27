use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PolaroidPortraitIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PolaroidPortraitIcon(props: PolaroidPortraitIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 15C17.1046 15 18 14.1046 18 13C18 11.8954 17.1046 11 16 11C14.8954 11 14 11.8954 14 13C14 14.1046 14.8954 15 16 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M11 22C11.728 19.67 13.6913 18 16 18C18.3087 18 20.272 19.67 21 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7 22L25 22L25 7L7 7L7 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26L29 6C29 4.34315 27.6569 3 26 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
