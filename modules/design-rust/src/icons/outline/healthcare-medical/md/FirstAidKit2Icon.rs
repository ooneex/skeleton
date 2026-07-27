use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FirstAidKit2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FirstAidKit2Icon(props: FirstAidKit2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 7V2H22V7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27 7H5C3.34315 7 2 8.34315 2 10V26C2 27.6569 3.34315 29 5 29H27C28.6569 29 30 27.6569 30 26V10C30 8.34315 28.6569 7 27 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 16L14 12H18L18 16H22L22 20H18V24H14V20H10L10 16H14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
