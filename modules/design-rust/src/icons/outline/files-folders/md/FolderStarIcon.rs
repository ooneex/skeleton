use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderStarIcon(props: FolderStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 16.5V11C30 9.34315 28.6569 8 27 8H17.4L13.2 4H5C3.34315 4 2 5.34315 2 7V24C2 25.6569 3.34315 27 5 27H15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 16L25.0092 19.9501L29.5 20.584L26.25 23.6588L27.017 28L23 25.9501L18.983 28L19.75 23.6588L16.5 20.584L20.9908 19.9501L23 16Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
