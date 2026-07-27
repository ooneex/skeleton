use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NoodlesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NoodlesIcon(props: NoodlesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 12H21V13C21 16.9264 18.9634 18.4906 16 19.9711L15.5 21H8.5L8 19.9711C5.03656 18.4906 3 16.9264 3 13V12H9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 8C21 4.68629 18.3137 2 15 2C11.6863 2 9 4.68629 9 8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M2 4.5L4.5 8H5V3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
