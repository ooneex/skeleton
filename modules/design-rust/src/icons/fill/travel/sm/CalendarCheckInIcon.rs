use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarCheckInIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarCheckInIcon(props: CalendarCheckInIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "6",
                width: "2",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                width: "2",
                height: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "24 17 16.914 17 19.914 14 18.5 12.586 13.086 18 18.5 23.414 19.914 22 16.914 19 24 19 24 17",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h8v-2H4c-.552,0-1-.448-1-1v-9h18v4h2v-7c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
