use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OilCanDropIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OilCanDropIcon(props: OilCanDropIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 10.9999L9 5.99997",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M19.8582 25.2198C19.306 25.7218 18.5865 26 17.8402 26H5C3.34315 26 2 24.6569 2 23V14C2 12.3431 3.34315 11 5 11H14.5L19 16L30 13.5V16L19.8582 25.2198Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6 22H8.66667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 6.00003H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M28.5 23C29.7984 24.1667 31 25.9167 31 27.4199C31 29.0058 29.8806 30 28.5 30C27.1194 30 26 29.0058 26 27.4199C26 25.9167 27.2149 24.1667 28.5 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
