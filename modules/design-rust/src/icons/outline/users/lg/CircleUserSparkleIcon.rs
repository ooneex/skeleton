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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26.85 17.15L24 10.5L21.15 17.15L14.5 20L21.15 22.85L24 29.5L26.85 22.85L33.5 20L26.85 17.15Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M36.7879 40.6588C34.3441 36.1003 29.5341 33 24 33C18.4659 33 13.656 36.1003 11.2122 40.6588",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
