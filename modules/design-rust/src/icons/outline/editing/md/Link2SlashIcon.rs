use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2SlashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2SlashIcon(props: Link2SlashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m29.34,8.315c.984.492,1.66,1.51,1.66,2.685v10c0,1.657-1.343,3-3,3h-7c-1.657,0-3-1.343-3-3v-1",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m18,14v-3c0-1.657,1.343-3,3-3h3",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            path {
                d: "m14,12v-1c0-1.657-1.343-3-3-3h-7c-1.657,0-3,1.343-3,3v10c0,1.657,1.343,3,3,3h4l.396-.396",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "10 16 16 16 15.562 16.438",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "2",
                y1: "30",
                x2: "30",
                y2: "2",
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
