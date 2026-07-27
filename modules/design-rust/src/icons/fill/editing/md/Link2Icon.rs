use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2Icon(props: Link2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m28,25h-7c-2.206,0-4-1.794-4-4v-2h2v2c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-10c0-1.103-.897-2-2-2h-7c-1.103,0-2,.897-2,2v2h-2v-2c0-2.206,1.794-4,4-4h7c2.206,0,4,1.794,4,4v10c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m11,25h-7c-2.206,0-4-1.794-4-4v-10c0-2.206,1.794-4,4-4h7c2.206,0,4,1.794,4,4v2h-2v-2c0-1.103-.897-2-2-2h-7c-1.103,0-2,.897-2,2v10c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-2h2v2c0,2.206-1.794,4-4,4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "9",
                y: "15",
                width: "14",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
