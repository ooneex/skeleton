use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleUserSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleUserSparkleIcon(props: CircleUserSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.7188 20.2046C16.9562 17.7688 14.6875 16 12 16C9.31252 16 7.0438 17.7688 6.28125 20.2046",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13.5 8.5L12 5L10.5 8.5L7 10L10.5 11.5L12 15L13.5 11.5L17 10L13.5 8.5Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
