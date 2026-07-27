use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CompareItemsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CompareItemsIcon(props: CompareItemsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "18",
                y: "9",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "18",
                y: "17",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "28",
                y: "9",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "28",
                y: "17",
                width: "2",
                height: "6",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "28",
                rx: "3.86",
                ry: "3.86",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,7h-2v-1c0-2.206,1.794-4,4-4h1v2h-1c-1.103,0-2,.897-2,2v1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m23,30h-1c-2.206,0-4-1.794-4-4v-1h2v1c0,1.103.897,2,2,2h1v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26,30h-1v-2h1c1.103,0,2-.897,2-2v-1h2v1c0,2.206-1.794,4-4,4Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m30,7h-2v-1c0-1.103-.897-2-2-2h-1v-2h1c2.206,0,4,1.794,4,4v1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
