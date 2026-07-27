use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TimelineVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TimelineVerticalIcon(props: TimelineVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "16",
                y: "3",
                width: "7",
                height: "7",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "16",
                y: "14",
                width: "7",
                height: "7",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "8",
                width: "7",
                height: "7",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "13 11 13 8 15 8 15 6 13 6 13 1 11 1 11 6 11 8 11 11 9 11 9 13 11 13 11 16 11 18 11 23 13 23 13 18 15 18 15 16 13 16 13 13 13 11",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
