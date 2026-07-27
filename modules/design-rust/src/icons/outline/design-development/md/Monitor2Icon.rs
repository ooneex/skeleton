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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 6.5C16.8284 6.5 17.5 5.82843 17.5 5C17.5 4.17157 16.8284 4 16 4C15.1716 4 14.5 4.17157 14.5 5C14.5 5.82843 15.1716 6.5 16 6.5Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M19 29V24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 29V24",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 4H5C3.34315 4 2 5.34315 2 7V21C2 22.6569 3.34315 24 5 24H27C28.6569 24 30 22.6569 30 21V7C30 5.34315 28.6569 4 27 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 29H9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 20H2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
