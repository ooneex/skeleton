use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ScreenSharingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ScreenSharingIcon(props: ScreenSharingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "18",
                y1: "21",
                x2: "6",
                y2: "21",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "2",
                y1: "3",
                x2: "9",
                y2: "10",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
            }
            path {
                d: "m12,3h8c1.105,0,2,.895,2,2v10c0,1.105-.895,2-2,2H4c-1.105,0-2-.895-2-2v-2",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "8 3 2 3 2 9",
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
