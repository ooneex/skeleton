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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "19",
                width: "20",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "12",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                y: "12",
                width: "7",
                height: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "18.414 7 12 .586 5.586 7 7 8.414 11 4.414 11 17 13 17 13 4.414 17 8.414 18.414 7",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
