use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CalendarDayViewIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CalendarDayViewIcon(props: CalendarDayViewIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "6",
                width: "20",
                height: "12",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "20",
                width: "20",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "20",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
