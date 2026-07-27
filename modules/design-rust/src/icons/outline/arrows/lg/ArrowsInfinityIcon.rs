use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsInfinityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsInfinityIcon(props: ArrowsInfinityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 29V34.5C24 40.299 19.299 45 13.5 45C7.70101 45 3 40.299 3 34.5C3 28.701 7.70101 24 13.5 24H34.5C40.299 24 45 19.299 45 13.5C45 7.70101 40.299 3 34.5 3C28.701 3 24 7.70101 24 13.5V19",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M16.0001 11L23.9999 18.9999L31.9999 11.0001",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 37L24 29L32 37",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
