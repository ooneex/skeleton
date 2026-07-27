use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct WalkingSupportIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn WalkingSupportIcon(props: WalkingSupportIconProps) -> Element {
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
                y1: "7",
                x2: "17",
                y2: "12",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            line {
                x1: "2",
                y1: "22",
                x2: "6",
                y2: "18",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m6,18l2-7L16.414,2.586c.781-.781,2.047-.781,2.828,0,0,0,0,0,0,0l2.171,2.171c.781.781.781,2.047,0,2.828,0,0,0,0,0,0l-8.414,8.414-7,2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
        }
    }
}
