use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SaleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SaleIcon(props: SaleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 9L20 9L20 15H23M21.5 12H20.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14.5 9L14.5 15H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4 9H2.5C1.67157 9 1 9.67157 1 10.5V10.5C1 11.3284 1.67157 12 2.5 12H3.5C4.32843 12 5 12.6716 5 13.5V13.5C5 14.3284 4.32843 15 3.5 15H2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 14H11",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7.57832 15H7.5L9 9H10L11.5 15H11.4148",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M4.85857 19C6.67349 20.8514 9.20261 22 12 22C14.7974 22 17.3265 20.8514 19.1414 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4.85858 5C6.6735 3.14864 9.20262 2 12 2C14.7974 2 17.3265 3.14864 19.1414 5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
