use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct QueueIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn QueueIcon(props: QueueIconProps) -> Element {
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
                y: "3",
                width: "30",
                height: "10",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "19",
                width: "30",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1",
                y: "27",
                width: "30",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
