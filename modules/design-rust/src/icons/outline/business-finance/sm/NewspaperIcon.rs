use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NewspaperIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NewspaperIcon(props: NewspaperIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "9",
                y1: "13",
                x2: "17",
                y2: "13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "9",
                y1: "17",
                x2: "17",
                y2: "17",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            rect {
                x: "9",
                y: "7",
                width: "8",
                height: "2",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m3,21h16c1.105,0,2-.895,2-2V3H5v15.893c0,.996-.681,1.92-1.664,2.08-1.253.204-2.336-.758-2.336-1.973v-6",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
