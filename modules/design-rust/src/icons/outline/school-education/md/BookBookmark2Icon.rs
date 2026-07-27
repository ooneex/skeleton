use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookBookmark2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookBookmark2Icon(props: BookBookmark2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 2L12 12.6667L16 10L20 12.6667L20 2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M26 24V24C24.7889 25.8167 24.7889 28.1833 26 30V30",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 27L5 5C5 3.34315 6.34315 2 8 2L27 2L27 24.2222",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M27 30H8C6.34315 30 5 28.6569 5 27V27C5 25.3431 6.34315 24 8 24H27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
