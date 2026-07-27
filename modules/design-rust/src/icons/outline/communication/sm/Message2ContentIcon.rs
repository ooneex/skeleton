use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Message2ContentIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Message2ContentIcon(props: Message2ContentIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,3H4c-1.105,0-2,.895-2,2v11c0,1.105.895,2,2,2h5l3,4,3-4h5c1.105,0,2-.895,2-2V5c0-1.105-.895-2-2-2Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            line {
                x1: "7",
                y1: "8",
                x2: "17",
                y2: "8",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "7",
                y1: "13",
                x2: "13",
                y2: "13",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
