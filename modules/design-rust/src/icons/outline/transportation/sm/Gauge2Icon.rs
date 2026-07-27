use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Gauge2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Gauge2Icon(props: Gauge2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "12",
                y1: "12",
                x2: "5",
                y2: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m2.696,8.352c-.444,1.131-.696,2.359-.696,3.648,0,5.523,4.477,10,10,10s10-4.477,10-10S17.523,2,12,2c-1.289,0-2.516.252-3.648.696",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "12",
                cy: "12",
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
