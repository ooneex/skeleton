use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareUserSparkleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareUserSparkleIcon(props: SquareUserSparkleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 26L29 6C29 4.34315 27.6569 3 26 3L6 3C4.34315 3 3 4.34315 3 6L3 26C3 27.6569 4.34315 29 6 29L26 29C27.6569 29 29 27.6569 29 26Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.15997 29C8.04114 24.9982 11.6643 22 16 22C20.3357 22 23.9589 24.9982 24.84 29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M18.25 10.75L16 5.5L13.75 10.75L8.5 13L13.75 15.25L16 20.5L18.25 15.25L23.5 13L18.25 10.75Z",
                fill: "currentColor",
                "data-color": "color-2",
                "data-stroke": "none",
                "data-cap": "butt",
            }
        }
    }
}
