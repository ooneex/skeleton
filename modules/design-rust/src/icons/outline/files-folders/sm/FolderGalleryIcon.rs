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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 10V8C22 6.89543 21.1046 6 20 6H13L10 3H4C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            rect {
                x: "15",
                y: "13",
                width: "3",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            rect {
                x: "15",
                y: "18",
                width: "3",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            rect {
                x: "20",
                y: "13",
                width: "3",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            rect {
                x: "20",
                y: "18",
                width: "3",
                height: "3",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
        }
    }
}
