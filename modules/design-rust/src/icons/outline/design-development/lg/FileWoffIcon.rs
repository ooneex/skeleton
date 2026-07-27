use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileWoffIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileWoffIcon(props: FileWoffIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 3V17H40",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 25L8 8C8 5.23858 10.2386 3 13 3L26 3L40 16L40 25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2.73572 30H2.60718L4.00003 43H5L8.00007 35.5714L11 43H12L13.3929 30H13.3354",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29 43L29 30H36M33.375 36.5H29.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M39 43L39 30H46M43.375 36.5H39.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 36.5C26 40.0899 23.7614 43 21 43C18.2386 43 16 40.0899 16 36.5C16 32.9101 18.2386 30 21 30C23.7614 30 26 32.9101 26 36.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
