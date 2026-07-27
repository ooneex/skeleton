use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileInfoIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileInfoIcon(props: FileInfoIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M13 2V11H4",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M22 17C25.866 17 29 20.134 29 24C29 27.866 25.866 31 22 31C18.134 31 15 27.866 15 24C15 20.134 18.134 17 22 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M13 30H7C5.34315 30 4 28.6569 4 27V11.2426C4 10.447 4.31607 9.68393 4.87868 9.12132L11.1213 2.87868C11.6839 2.31607 12.447 2 13.2426 2H25C26.6569 2 28 3.34315 28 5V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 27.5V24.5H21",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 21.5C22.2761 21.5 22.5 21.2761 22.5 21C22.5 20.7239 22.2761 20.5 22 20.5C21.7239 20.5 21.5 20.7239 21.5 21C21.5 21.2761 21.7239 21.5 22 21.5Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
        }
    }
}
