use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SoupIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SoupIcon(props: SoupIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 30L5 30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 24V27C5 36.3251 8.74386 39.4839 15 43H33C39.2561 39.4839 43 36.3251 43 27V24H5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23.3284 4.67157C21.7663 6.23367 21.7663 8.76633 23.3284 10.3284L24.6716 11.6716C26.2337 13.2337 26.2337 15.7663 24.6716 17.3284",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M33.8284 4.67157C32.2663 6.23367 32.2663 8.76633 33.8284 10.3284L35.1716 11.6716C36.7337 13.2337 36.7337 15.7663 35.1716 17.3284",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.1716 17.3284C15.7337 15.7663 15.7337 13.2337 14.1716 11.6716",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
