use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LinesYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LinesYIcon(props: LinesYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "8",
                y: "10",
                width: "2",
                height: "12",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "14",
                y: "6",
                width: "2",
                height: "16",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "20",
                y: "15",
                width: "2",
                height: "7",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "2",
                height: "20",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
