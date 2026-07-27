use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarCheckIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarCheckIcon(props: CalendarCheckIconProps) -> Element {
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
            path {
                d: "m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h6v-2h-6c-.552,0-1-.448-1-1v-9h18v3.5h2v-6.5c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "15.5 23.414 11.586 19.5 13 18.086 15.5 20.586 22 14.086 23.414 15.5 15.5 23.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
