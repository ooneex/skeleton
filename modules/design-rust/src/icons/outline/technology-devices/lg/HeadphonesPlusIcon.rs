use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeadphonesPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeadphonesPlusIcon(props: HeadphonesPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 8.5L13 12.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M38 8.5L35 12.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 38.4757V24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24V38.4757C45 41.9872 41.9978 44.7482 38.4985 44.4547L33.0769 44L32.3883 32.2936C32.2194 29.4217 34.5028 27 37.3797 27H40V24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24V27H10.6732C13.559 27 15.8457 29.4361 15.6632 32.3161L14.9231 44L9.50147 44.4547C6.00224 44.7482 3 41.9872 3 38.4757Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 14.5V25.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M29.5 20L18.5 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
