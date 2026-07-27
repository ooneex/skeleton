use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BarLoaderIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BarLoaderIcon(props: BarLoaderIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 2V6",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.6",
                d: "M16 26V30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.8",
                d: "M30.005 15.995L26.005 15.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.4",
                d: "M6.005 15.995L2.005 15.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.9",
                d: "M25.9009 6.09697L23.0725 8.92539",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.5",
                d: "M8.93042 23.0675L6.10199 25.896",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.7",
                d: "M25.908 25.896L23.0796 23.0675",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.3",
                d: "M8.9375 8.9254L6.10907 6.09697",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
