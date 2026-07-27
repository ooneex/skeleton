use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MagnifierRotateIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MagnifierRotateIcon(props: MagnifierRotateIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "20.5",
                y1: "20.5",
                x2: "15",
                y2: "15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m3.071,9c.485-3.392,3.403-6,6.929-6,2.643,0,4.945,1.465,6.136,3.628",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "16.5 3 16.5 7 12.5 7",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m16.929,11c-.485,3.392-3.403,6-6.929,6-2.643,0-4.945-1.465-6.136-3.628",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "3.5 17 3.5 13 7.5 13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
