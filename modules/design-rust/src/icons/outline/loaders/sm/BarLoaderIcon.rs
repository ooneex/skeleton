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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                opacity: "0.6",
                d: "M12 19V22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M12 2V5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.4",
                d: "M5.005 11.995L2.005 11.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.8",
                d: "M22.005 11.995L19.005 11.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.5",
                d: "M7.0517 16.9462L4.93038 19.0675",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.9",
                d: "M19.0725 4.92539L16.9512 7.04671",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.3",
                d: "M7.05878 7.04672L4.93746 4.9254",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.7",
                d: "M19.0796 19.0675L16.9583 16.9462",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
