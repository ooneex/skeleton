use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParagraphAddIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParagraphAddIcon(props: ParagraphAddIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "11",
                width: "28",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "3",
                width: "28",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "19",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "27",
                width: "13",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "30 23 25 23 25 18 23 18 23 23 18 23 18 25 23 25 23 30 25 30 25 25 30 25 30 23",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
