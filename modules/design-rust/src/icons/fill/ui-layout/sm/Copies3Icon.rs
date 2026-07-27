use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Copies3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Copies3Icon(props: Copies3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "2",
                width: "12",
                height: "12",
                rx: "2",
                ry: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m16,18h-8c-1.103,0-2-.897-2-2v-1h2v1h8v-8h-1v-2h1c1.103,0,2,.897,2,2v8c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,22h-8c-1.103,0-2-.897-2-2v-1h2v1h8v-8h-1v-2h1c1.103,0,2,.897,2,2v8c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
