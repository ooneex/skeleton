use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BellPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BellPlusIcon(props: BellPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10.277,22c.346.595.984,1,1.723,1s1.376-.405,1.723-1h-3.445Z",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                fill: "currentColor",
            }
            line {
                x1: "19",
                y1: "9",
                x2: "19",
                y2: "1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m12.358,2.018c-.119-.006-.237-.018-.358-.018-3.866,0-7,3.134-7,7v6c0,1.657-1.343,3-3,3h20c-1.657,0-3-1.343-3-3v-2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "15",
                y1: "5",
                x2: "23",
                y2: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
