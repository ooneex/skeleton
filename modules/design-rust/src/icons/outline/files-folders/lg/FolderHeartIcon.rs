use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderHeartIcon(props: FolderHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25.5 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M36 43C38.218 42 46 36.458 46 31.378C46 28.408 43.588 26 40.616 26C38.656 26 37.192 27.228 36 28.606C34.81 27.226 33.344 26 31.384 26C28.41 26 26 28.408 26 31.378C26 36.458 33.782 42 36 43Z",
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
