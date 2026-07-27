use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ExpandObj2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ExpandObj2Icon(props: ExpandObj2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "6",
                y: "6",
                width: "12",
                height: "12",
                rx: "2",
                ry: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "23 10 21 10 21 3 14 3 14 1 23 1 23 10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "10 23 1 23 1 14 3 14 3 21 10 21 10 23",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
