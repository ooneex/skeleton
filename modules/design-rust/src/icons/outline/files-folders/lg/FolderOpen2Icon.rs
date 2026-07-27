use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderOpen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderOpen2Icon(props: FolderOpen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 39V11C3 8.23858 5.23858 6 8 6H18L25 11H35.0552C37.8597 11 40.1158 13.3064 40.0539 16.1103L40 18.556",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M32.9453 40.9999L4.96638 40.9999C3.59032 40.9999 2.62533 39.6425 3.07739 38.3428L10.1532 18H44.5L37.6678 37.6425C36.9686 39.6526 35.0736 40.9999 32.9453 40.9999Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
