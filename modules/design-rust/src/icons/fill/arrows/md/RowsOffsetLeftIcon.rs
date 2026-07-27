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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "12.5",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "22",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                y: "3",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "7 22.414 .586 16 7 9.586 8.414 11 3.414 16 8.414 21 7 22.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
