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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "1",
                y: "1",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "9",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "1",
                y: "17",
                width: "14",
                height: "6",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "19 16.414 17.586 15 20.586 12 17.586 9 19 7.586 23.414 12 19 16.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
