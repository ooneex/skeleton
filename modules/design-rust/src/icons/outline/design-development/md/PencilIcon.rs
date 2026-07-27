use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PencilIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PencilIcon(props: PencilIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "20.031",
                y1: "5.969",
                x2: "26.031",
                y2: "11.969",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            line {
                x1: "23",
                y1: "9",
                x2: "8.75",
                y2: "23.25",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m10.5,27.5l-8,2,2-8L22.257,3.743c1.657-1.657,4.343-1.657,6,0h0c1.657,1.657,1.657,4.343,0,6L10.5,27.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
