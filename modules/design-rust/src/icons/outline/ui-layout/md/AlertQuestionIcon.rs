use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertQuestionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertQuestionIcon(props: AlertQuestionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m9.041,9.002c1.068-4.073,4.389-6.181,8.106-5.99,3.671.189,7.088,2.209,6.93,6.895-.224,6.662-7.286,5.759-8.077,12.093h.031",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "16",
                cy: "28",
                r: "1",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
