use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DiagramGanttIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DiagramGanttIcon(props: DiagramGanttIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "3",
                width: "5",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "8",
                width: "10",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "8",
                y: "13",
                width: "12",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "18",
                y: "18",
                width: "5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
