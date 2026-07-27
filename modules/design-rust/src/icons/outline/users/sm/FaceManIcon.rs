use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FaceManIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FaceManIcon(props: FaceManIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m12,18.5c1.381,0,2.5-1.119,2.5-2.5h-5c0,1.381,1.119,2.5,2.5,2.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m2.985,10.63c2.62-3.493,7.251.5,12.285-4.054,2.465,3.903,5.715,4.106,5.715,4.106",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            circle {
                cx: "8.25",
                cy: "13.25",
                r: "1.25",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            circle {
                cx: "15.75",
                cy: "13.25",
                r: "1.25",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            rect {
                x: "3",
                y: "2",
                width: "18",
                height: "20",
                rx: "9",
                ry: "9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
