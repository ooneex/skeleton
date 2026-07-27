use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FolderBookmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FolderBookmarkIcon(props: FolderBookmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 41H8C5.23858 41 3 38.7614 3 36V10C3 7.23858 5.23858 5 8 5H19L27 11H40C42.7614 11 45 13.2386 45 16V21.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M43 26.5H32C30.8954 26.5 30 27.3954 30 28.5V43.5L37.5 37.8333L45 43.5V28.5C45 27.3954 44.1046 26.5 43 26.5Z",
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
