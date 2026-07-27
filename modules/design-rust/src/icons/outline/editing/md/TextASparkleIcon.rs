use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextASparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextASparkleIcon(props: TextASparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.85 24.15L5.5 21L4.15 24.15L1 25.5L4.15 26.85L5.5 30L6.85 26.85L10 25.5L6.85 24.15Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M27.9 9.1L27 7L26.1 9.1L24 10L26.1 10.9L27 13L27.9 10.9L30 10L27.9 9.1Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M6.6 5.4L6 4L5.4 5.4L4 6L5.4 6.6L6 8L6.6 6.6L8 6L6.6 5.4Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-cap": "butt",
                "data-stroke": "none",
            }
            path {
                d: "M25.8808 28H26L16.6667 4H16H15.3333L9.49999 19H22.1791",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
