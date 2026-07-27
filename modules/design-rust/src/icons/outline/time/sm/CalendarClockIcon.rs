use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarClockIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarClockIcon(props: CalendarClockIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            line {
                x1: "2",
                y1: "9",
                x2: "22",
                y2: "9",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            line {
                x1: "7",
                y1: "1",
                x2: "7",
                y2: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "17",
                y1: "1",
                x2: "17",
                y2: "4",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m22,9.95v-3.95c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2h5.232",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            circle {
                cx: "18",
                cy: "18",
                r: "5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            polyline {
                points: "18 16 18 18 19.25 19.25",
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
