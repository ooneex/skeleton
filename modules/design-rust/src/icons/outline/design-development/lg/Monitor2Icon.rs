use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Monitor2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Monitor2Icon(props: Monitor2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 7C24.8284 7 25.5 7.67157 25.5 8.5C25.5 9.32843 24.8284 10 24 10C23.1716 10 22.5 9.32843 22.5 8.5C22.5 7.67158 23.1716 7 24 7Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M24 8C24.2761 8 24.5 8.22386 24.5 8.5C24.5 8.77614 24.2761 9 24 9C23.7239 9 23.5 8.77614 23.5 8.5C23.5 8.22386 23.7239 8 24 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 35V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M28 35V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 43H34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 30H45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 12L3 30C3 32.7614 5.23858 35 8 35L40 35C42.7614 35 45 32.7614 45 30L45 12C45 9.23857 42.7614 7 40 7L38.7 7L8 6.99999C5.23858 7 3 9.23857 3 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
