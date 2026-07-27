use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CutleryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CutleryIcon(props: CutleryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M5.10388 6.10379L15.5 16.5L15.2829 16.2828",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M2.00001 10.0711L6.6967 14.7678C7.67301 15.7441 9.25592 15.7441 10.2322 14.7678L12 13L13.7678 11.2322C14.7441 10.2559 14.7441 8.67302 13.7678 7.69671L9.07108 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 27.9203L26.9203 5.00001L28.3345 6.41422C30.2871 8.36684 30.2871 11.5327 28.3345 13.4853L18.0827 23.7371L13.4865 19.1409",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 28L23.2422 24.2421",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
