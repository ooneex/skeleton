use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsExpandYIcon(props: ArrowsExpandYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 3.99998L24 44",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M36.7279 16.7279L24 4L11.2721 16.7279",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M36.7279 31.2721L24 44L11.2721 31.2721",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
