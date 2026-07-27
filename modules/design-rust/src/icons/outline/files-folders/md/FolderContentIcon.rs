use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderContentIcon(props: FolderContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 9V3H5V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M3 12V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V16C29 14.3431 27.6569 13 26 13H17.3L13.4 9H6C4.34315 9 3 10.3431 3 12Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
