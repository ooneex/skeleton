use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OpeningQuotationMarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OpeningQuotationMarkIcon(props: OpeningQuotationMarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 8L17.6271 8.31682C10.8211 9.88743 6 15.9478 6 22.9327V30V27.1935",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M40 8L38.6271 8.31682C31.8211 9.88743 27 15.9478 27 22.9327V30V27.1935",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            rect {
                x: "6",
                y: "25",
                width: "15",
                height: "15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "27",
                y: "25",
                width: "15",
                height: "15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
