use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartPlusIcon(props: HeartPlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "19",
                y1: "21",
                x2: "19",
                y2: "13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m21.816,10.161c.675-2.746-.688-5.654-3.282-6.735-2.41-1.006-5.105-.105-6.538,2.019-1.433-2.123-4.128-3.025-6.538-2.019-2.82,1.176-4.192,4.511-3.063,7.45,1.483,3.864,5.28,6.905,6.409,7.745l3.189,2.379.856-.637",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "15",
                y1: "17",
                x2: "23",
                y2: "17",
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
