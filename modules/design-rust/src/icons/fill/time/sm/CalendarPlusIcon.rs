use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarPlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarPlusIcon(props: CalendarPlusIconProps) -> Element {
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
                points: "23 17 19 17 19 13 17 13 17 17 13 17 13 19 17 19 17 23 19 23 19 19 23 19 23 17",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h7v-2h-7c-.552,0-1-.449-1-1v-9h18v5.95h2V6c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
