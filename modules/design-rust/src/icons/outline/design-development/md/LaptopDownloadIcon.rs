use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LaptopDownloadIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LaptopDownloadIcon(props: LaptopDownloadIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 19V7C4 5.34315 5.34315 4 7 4H13.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2 23V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V23H21C21 23.5523 20.5523 24 20 24H12C11.4477 24 11 23.5523 11 23H2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 17C26.866 17 30 13.866 30 10C30 6.13401 26.866 3 23 3C19.134 3 16 6.13401 16 10C16 13.866 19.134 17 23 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 7.5L23 13V12.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 10L23 13L26 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
