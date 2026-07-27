use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FarmerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FarmerIcon(props: FarmerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10,14v3c0,.552-.448,1-1,1h-3c-.552,0-1-.448-1-1v-3",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m4,6v1.5c0,1.933,1.567,3.5,3.5,3.5s3.5-1.567,3.5-3.5v-1.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            line {
                x1: "2",
                y1: "6",
                x2: "13",
                y2: "6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m6,2h3c1.104,0,2,.896,2,2v2h-7v-2c0-1.104.896-2,2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m5,14h5c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m23,5v4c0,1.105-.895,2-2,2h-2c-1.105,0-2-.895-2-2v-4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "20",
                y1: "5",
                x2: "20",
                y2: "11",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "20",
                y1: "15",
                x2: "20",
                y2: "22",
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
