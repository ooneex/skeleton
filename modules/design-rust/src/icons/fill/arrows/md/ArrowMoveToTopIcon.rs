use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowMoveToTopIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowMoveToTopIcon(props: ArrowMoveToTopIconProps) -> Element {
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
                y: "28",
                width: "28",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "20",
                y: "19",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "19",
                width: "10",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "23.414 9 16 1.586 8.586 9 10 10.414 15 5.414 15 25 17 25 17 5.414 22 10.414 23.414 9",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
