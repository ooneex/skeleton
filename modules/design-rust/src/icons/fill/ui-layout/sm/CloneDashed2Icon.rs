use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CloneDashed2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CloneDashed2Icon(props: CloneDashed2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,8h-2v-3.5c0-.276-.224-.5-.5-.5h-1.5v-2h1.5c1.378,0,2.5,1.122,2.5,2.5v3.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "8",
                y: "2",
                width: "4",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m4,6h-2v-1.5c0-1.378,1.122-2.5,2.5-2.5h1.5v2h-1.5c-.276,0-.5.224-.5.5v1.5Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "2",
                y: "8",
                width: "2",
                height: "4",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m8,18h-3.5c-1.378,0-2.5-1.122-2.5-2.5v-1.5h2v1.5c0,.276.224.5.5.5h3.5v2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "6",
                y: "6",
                width: "16",
                height: "16",
                rx: "2.5",
                ry: "2.5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
