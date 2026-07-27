use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClosingQuotationMarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClosingQuotationMarkIcon(props: ClosingQuotationMarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M30.5 39.5V39.5C37.7537 36.7799 42.6333 29.9327 42.8371 22.1884L43 16L42.9211 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.5 39.5V39.5C15.7537 36.7799 20.6333 29.9327 20.8371 22.1884L21 16L20.9211 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "13",
                cy: "16",
                r: "8",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "35",
                cy: "16",
                r: "8",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
