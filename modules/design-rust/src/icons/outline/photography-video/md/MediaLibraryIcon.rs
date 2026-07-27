use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MediaLibraryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MediaLibraryIcon(props: MediaLibraryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30 21L30 7C30 5.34315 28.6569 4 27 4L9 4C7.34315 4 6 5.34314 6 7L6 21C6 22.6569 7.34314 24 9 24L27 24C28.6569 24 30 22.6569 30 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 28L8 28C4.68629 28 2 25.3137 2 22L2 10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 10L22.5 14L15 18V10Z",
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
