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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "6",
                width: "5",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "12",
                width: "15",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "13",
                y: "18",
                width: "15",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "26",
                y: "24",
                width: "5",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
