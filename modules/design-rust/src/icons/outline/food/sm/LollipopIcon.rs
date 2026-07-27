use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LollipopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LollipopIcon(props: LollipopIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 21L10.791 13.209L10.4932 13.5068",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.7574 4.75736C8.41422 7.1005 8.41422 10.8995 10.7574 13.2426C13.1005 15.5858 16.8995 15.5858 19.2426 13.2426C21.5858 10.8995 21.5858 7.1005 19.2427 4.75736C16.8995 2.41421 13.1005 2.41421 10.7574 4.75736Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19.9498 13.9497L15 8.99998L10.0503 4.05023",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
