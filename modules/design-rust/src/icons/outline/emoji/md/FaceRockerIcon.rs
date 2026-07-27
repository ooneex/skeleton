use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceRockerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceRockerIcon(props: FaceRockerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.5 3.1217C26.4979 5.25894 30 10.2205 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16C2 10.2205 5.50212 5.25894 10.5 3.1217",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.5 13L19 15.8665V16H24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10.5 13L13 15.8665V16H8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 27C17.6569 27 19 25.2091 19 23C19 20.7909 17.6569 19 16 19C14.3431 19 13 20.7909 13 23C13 25.2091 14.3431 27 16 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.143 8.25722L13.5 8L15 1H17L18.5 8L17.857 8.25722C16.6649 8.73404 15.3351 8.73404 14.143 8.25722Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
