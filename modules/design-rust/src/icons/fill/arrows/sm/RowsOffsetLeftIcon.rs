use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RowsOffsetLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RowsOffsetLeftIcon(props: RowsOffsetLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "9",
                y: "1",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "9",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "17",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "5 16.414 .586 12 5 7.586 6.414 9 3.414 12 6.414 15 5 16.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
