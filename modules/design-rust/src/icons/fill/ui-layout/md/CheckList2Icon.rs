use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CheckList2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CheckList2Icon(props: CheckList2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "25",
                y: "12",
                width: "6",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "20",
                y: "18",
                width: "11",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "24",
                width: "16",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "9.034 27.558 .589 17.906 2.094 16.589 8.966 24.442 24.844 4.594 26.406 5.844 9.034 27.558",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
