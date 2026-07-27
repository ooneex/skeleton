use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ListFavs2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ListFavs2Icon(props: ListFavs2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 24L43 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 10H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M22 38H43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 4.5L11.5444 7.62718L15 8.129L12.5 10.5632L13.09 14L10 12.3772L6.90889 14L7.5 10.5632L5 8.129L8.45444 7.62718L10 4.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 19L11.5444 22.1272L15 22.629L12.5 25.0632L13.09 28.5L10 26.8772L6.90889 28.5L7.5 25.0632L5 22.629L8.45444 22.1272L10 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 33.5L11.5444 36.6272L15 37.129L12.5 39.5632L13.09 43L10 41.3772L6.90889 43L7.5 39.5632L5 37.129L8.45444 36.6272L10 33.5Z",
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
