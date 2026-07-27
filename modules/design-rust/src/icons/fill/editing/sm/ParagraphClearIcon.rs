use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParagraphClearIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParagraphClearIcon(props: ParagraphClearIconProps) -> Element {
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
                y: "8",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "2",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "14",
                width: "9",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "20",
                width: "9",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "22.414 15 21 13.586 18 16.586 15 13.586 13.586 15 16.586 18 13.586 21 15 22.414 18 19.414 21 22.414 22.414 21 19.414 18 22.414 15",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
