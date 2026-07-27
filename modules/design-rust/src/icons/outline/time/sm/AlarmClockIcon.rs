use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlarmClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlarmClockIcon(props: AlarmClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polyline {
                points: "12 7 12 12 15 15",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "3",
                y1: "21",
                x2: "5.5",
                y2: "18.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "21",
                y1: "21",
                x2: "18.5",
                y2: "18.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "12",
                cy: "12",
                r: "9",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "22.5",
                y1: "4.5",
                x2: "19.5",
                y2: "1.5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "1.5",
                y1: "4.5",
                x2: "4.5",
                y2: "1.5",
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
