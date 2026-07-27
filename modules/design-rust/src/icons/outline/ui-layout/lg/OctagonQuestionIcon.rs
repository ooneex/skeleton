use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonQuestionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonQuestionIcon(props: OctagonQuestionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M32.698 3H15.302L3 15.302V32.698L15.302 45H32.698L45 32.698V15.302L32.698 3Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 36C24.5523 36 25 35.5523 25 35C25 34.4477 24.5523 34 24 34C23.4477 34 23 34.4477 23 35C23 35.5523 23.4477 36 24 36Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
            }
            path {
                d: "M18 17.3704C18.9237 13.7262 21.7932 11.8392 25.0058 12.0107C28.1782 12.1792 31.1313 13.9874 30.9955 18.1802C30.8015 24.1411 24.685 23.3328 24.0016 29",
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
