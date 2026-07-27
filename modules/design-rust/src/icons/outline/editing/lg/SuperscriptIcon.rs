use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SuperscriptIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SuperscriptIcon(props: SuperscriptIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27.7347 5H28L7 43H7.27072",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27.7347 43H28L7 5H7.27072",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M45 21H35V19.8571V19.8571C35 18.4675 35.8193 17.2086 37.0899 16.6459L42.0647 14.4428C43.8493 13.6525 45 11.8843 45 9.93262V9.93262C45 7.20841 42.7916 5 40.0674 5H39.5714C37.0467 5 35 7.0467 35 9.57143V9.57143",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
