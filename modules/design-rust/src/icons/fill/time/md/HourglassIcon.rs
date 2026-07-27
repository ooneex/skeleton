use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HourglassIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HourglassIcon(props: HourglassIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25,8V2H7v6c0,3.925,2.677,6.689,4.294,8-1.617,1.311-4.294,4.075-4.294,8v6h18v-6c0-3.925-2.677-6.689-4.294-8,1.617-1.311,4.294-4.075,4.294-8Zm-9,7c-3.866,0-7-3.134-7-7V3h14v5c0,3.866-3.134,7-7,7Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "4",
                y: "1",
                width: "24",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "4",
                y: "29",
                width: "24",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
