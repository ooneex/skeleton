use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NotebookIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NotebookIcon(props: NotebookIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 24L7 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 11L7 11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 37L7 37",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M41 18.5L32.5 18.5C29.4624 18.5 27 20.9624 27 24V24C27 27.0376 29.4624 29.5 32.5 29.5H41",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M36 3L12 3C9.23858 3 7 5.23858 7 8L7 40C7 42.7614 9.23858 45 12 45L36 45C38.7614 45 41 42.7614 41 40L41 8C41 5.23858 38.7614 3 36 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.5 24.5C32.7761 24.5 33 24.2761 33 24C33 23.7239 32.7761 23.5 32.5 23.5C32.2239 23.5 32 23.7239 32 24C32 24.2761 32.2239 24.5 32.5 24.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M32.5 25.5C33.3284 25.5 34 24.8284 34 24C34 23.1716 33.3284 22.5 32.5 22.5C31.6716 22.5 31 23.1716 31 24C31 24.8284 31.6716 25.5 32.5 25.5Z",
                fill: "currentColor",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
