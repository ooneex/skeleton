use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileWebpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileWebpIcon(props: FileWebpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1.5 20V29H2L4.5 24.6667L7 29H7.5V20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 16L6 6C6 4.34315 7.34315 3 9 3L17 3L26 11L26 16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 3V12.0001H26",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M26 29V20H28.3333C29.8061 20 31 21.1939 31 22.6667V22.6667C31 24.1394 29.8061 25.3333 28.3333 25.3333H26.5714",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 20H10.5V29H14.5M13 24.5H11.125",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18.7857 20H17.5L17.5 29H21.25C22.4926 29 23.5 27.9926 23.5 26.75V26.75C23.5 25.5074 22.4926 24.5 21.25 24.5H18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17.5 20H19.75C20.9926 20 22 21.0074 22 22.25V22.25C22 23.4926 20.9926 24.5 19.75 24.5H17.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
