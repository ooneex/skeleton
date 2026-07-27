use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileJsxIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileJsxIcon(props: FileJsxIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.5 20H14.25C13.0074 20 12 21.0074 12 22.25V22.25C12 23.4926 13.0074 24.5 14.25 24.5H16.75C17.9926 24.5 19 25.5074 19 26.75V26.75C19 27.9926 17.9926 29 16.75 29H13.5",
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
                d: "M27.9191 29H28L22 20H22.0825",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22.0809 29H22L28 20H27.9175",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9 20L9 26C9 27.6569 7.65685 29 6 29V29C4.34315 29 3 27.6569 3 26V25.1429",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
