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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "3",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "10",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "10",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "17 15.586 13 19.586 13 7 11 7 11 19.586 7 15.586 5.586 17 12 23.414 18.414 17 17 15.586",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
