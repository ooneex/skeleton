use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderGalleryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderGalleryIcon(props: FolderGalleryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 13V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            rect {
                x: "18",
                y: "17",
                width: "4",
                height: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "18",
                y: "25",
                width: "4",
                height: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "26",
                y: "17",
                width: "4",
                height: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "26",
                y: "25",
                width: "4",
                height: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
