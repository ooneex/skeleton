use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MakeupMirrorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MakeupMirrorIcon(props: MakeupMirrorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 14L22.5 10.5L22.249 10.7509",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13.5 11.5L9.5 15.5L9.88177 15.1182",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 13C27 19.0751 22.0751 24 16 24C9.92487 24 5 19.0751 5 13C5 6.92487 9.92487 2 16 2C22.0751 2 27 6.92487 27 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 13C23 16.866 19.866 20 16 20C12.134 20 9 16.866 9 13C9 9.13401 12.134 6 16 6C19.866 6 23 9.13401 23 13Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M29 26V24H3V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
