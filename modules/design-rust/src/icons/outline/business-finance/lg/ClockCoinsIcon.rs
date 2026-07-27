use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClockCoinsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClockCoinsIcon(props: ClockCoinsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 34V41C25 43.7614 29.701 46 35.5 46C41.299 46 46 43.7614 46 41V34",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M24 14V24H10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21.7426 44.8801C11.2062 43.754 3 34.8353 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24C45 24.2989 44.9938 24.5963 44.9814 24.8922",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35.5 39C41.299 39 46 36.7614 46 34C46 31.2386 41.299 29 35.5 29C29.701 29 25 31.2386 25 34C25 36.7614 29.701 39 35.5 39Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34 34H37",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
