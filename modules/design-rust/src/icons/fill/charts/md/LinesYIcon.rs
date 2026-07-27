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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "9",
                y: "10",
                width: "2",
                height: "19",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "17",
                width: "2",
                height: "12",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "21",
                y: "10",
                width: "2",
                height: "19",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "27",
                y: "17",
                width: "2",
                height: "12",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "3",
                y: "3",
                width: "2",
                height: "26",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
