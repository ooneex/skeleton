use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HandbagIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HandbagIcon(props: HandbagIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 9V4C9 2.34315 10.3431 1 12 1V1C13.6569 1 15 2.34315 15 4V9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5.00004 6L3.45288 17.6035C3.21308 19.402 4.61218 21 6.42655 21H17.5735C19.3879 21 20.787 19.402 20.5472 17.6035L19 6H12H5.00004Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
