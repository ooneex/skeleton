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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 20V20C19.1671 18.472 21.6328 14.9762 21.8416 11.009L22 8L21.9126 9.41853",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M3.5 20V20C7.16712 18.472 9.63283 14.9762 9.84163 11.009L10 8L9.92105 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            circle {
                cx: "6",
                cy: "8",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            circle {
                cx: "18",
                cy: "8",
                r: "4",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
