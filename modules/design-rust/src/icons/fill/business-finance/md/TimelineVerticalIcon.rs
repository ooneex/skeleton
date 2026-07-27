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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "21",
                y: "2",
                width: "10",
                height: "10",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "21",
                y: "20",
                width: "10",
                height: "10",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "11",
                width: "10",
                height: "10",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "19 8 19 6 17 6 17 1 15 1 15 15 13 15 13 17 15 17 15 31 17 31 17 26 19 26 19 24 17 24 17 8 19 8",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
