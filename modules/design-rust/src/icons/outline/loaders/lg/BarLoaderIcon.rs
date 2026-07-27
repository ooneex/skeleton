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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 3V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.6",
                d: "M24 39V45",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.8",
                d: "M45.005 23.995L39.005 23.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.4",
                d: "M9.005 23.995L3.005 23.995",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.9",
                d: "M38.8507 9.14722L34.6081 13.3899",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.5",
                d: "M13.3948 34.6031L9.1522 38.8457",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.7",
                d: "M38.8578 38.8457L34.6151 34.6031",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                opacity: "0.3",
                d: "M13.4019 13.3899L9.15928 9.14722",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
