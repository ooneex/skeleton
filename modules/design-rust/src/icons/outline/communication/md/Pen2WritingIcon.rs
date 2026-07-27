use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pen2WritingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pen2WritingIcon(props: Pen2WritingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "3",
                y1: "29",
                x2: "29",
                y2: "29",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m11.464,22.536l-7,2,2-7,13.5-13.5c1.381-1.381,3.619-1.381,5,0h0c1.381,1.381,1.381,3.619,0,5l-13.5,13.5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "18",
                y1: "6",
                x2: "23",
                y2: "11",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
