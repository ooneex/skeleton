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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 12.1327V13.3827L21.9903 13.4825C21.6907 16.5485 19.6572 19.1701 16.7621 20.2229L16 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10 12.1327V13.3827L9.99025 13.4825C9.69068 16.5485 7.65725 19.1701 4.76211 20.2229L4 20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            rect {
                x: "22",
                y: "12",
                width: "8",
                height: "8",
                transform: "rotate(180 22 12)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            rect {
                x: "10",
                y: "12",
                width: "8",
                height: "8",
                transform: "rotate(180 10 12)",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
