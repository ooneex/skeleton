use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ClosingQuotationMark2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ClosingQuotationMark2Icon(props: ClosingQuotationMark2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M29 40L30.3729 39.6832C37.1789 38.1126 42 32.0522 42 25.0673V18V20.8065",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 40L9.37289 39.6832C16.1789 38.1126 21 32.0522 21 25.0673V18V20.8065",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            rect {
                x: "42",
                y: "23",
                width: "15",
                height: "15",
                transform: "rotate(180 42 23)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "21",
                y: "23",
                width: "15",
                height: "15",
                transform: "rotate(180 21 23)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
