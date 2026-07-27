use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PaperPlane2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PaperPlane2Icon(props: PaperPlane2IconProps) -> Element {
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
                y1: "3.5",
                x2: "9.5",
                y2: "14.5",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            polygon {
                points: "20.5 3.5 14.5 21.5 9.5 14.5 2.5 9.5 20.5 3.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
