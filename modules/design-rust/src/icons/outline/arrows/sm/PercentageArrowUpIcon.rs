use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PercentageArrowUpIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PercentageArrowUpIcon(props: PercentageArrowUpIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.0625 2L2.5625 8.33333L6 8.33333L6 21L10.125 21L10.125 8.33333L13.5625 8.33333L8.0625 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.5 15C16.3284 15 17 14.3284 17 13.5C17 12.6716 16.3284 12 15.5 12C14.6716 12 14 12.6716 14 13.5C14 14.3284 14.6716 15 15.5 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M21.5 21C22.3284 21 23 20.3284 23 19.5C23 18.6716 22.3284 18 21.5 18C20.6716 18 20 18.6716 20 19.5C20 20.3284 20.6716 21 21.5 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15 20L22 13",
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
