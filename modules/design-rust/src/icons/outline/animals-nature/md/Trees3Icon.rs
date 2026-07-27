use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trees3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trees3Icon(props: Trees3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 28L8 23H2L4.5 15.5L2.5 15L8 4L12 11L11.7143 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 28L24 23H30L27.5 15.5L29.5 15L24 4L20 11L20.2857 10.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 21.5L16 30.0001M16 21.5L14 19.5M16 21.5L18 19.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 26C19.3137 26 22 22.7168 22 18.6667C22 11.8571 16 4 16 4C16 4 10 11.8571 10 18.6667C10 22.7168 12.6863 26 16 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
