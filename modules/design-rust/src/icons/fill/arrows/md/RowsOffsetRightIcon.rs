use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RowsOffsetRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RowsOffsetRightIcon(props: RowsOffsetRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "25 22.414 23.586 21 28.586 16 23.586 11 25 9.586 31.414 16 25 22.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "12.5",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "3",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "2",
                y: "22",
                width: "19",
                height: "7",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
