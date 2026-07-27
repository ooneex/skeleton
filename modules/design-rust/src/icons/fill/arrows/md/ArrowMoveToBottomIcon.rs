use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowMoveToBottomIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowMoveToBottomIcon(props: ArrowMoveToBottomIconProps) -> Element {
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
                y: "2",
                width: "28",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "11",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "20",
                y: "11",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "22 21.586 17 26.586 17 7 15 7 15 26.586 10 21.586 8.586 23 16 30.414 23.414 23 22 21.586",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
