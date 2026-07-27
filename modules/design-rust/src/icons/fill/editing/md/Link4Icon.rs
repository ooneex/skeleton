use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link4Icon(props: Link4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13,25h-4c-4.962,0-9-4.038-9-9S4.038,7,9,7h4v2h-4c-3.86,0-7,3.14-7,7s3.14,7,7,7h4v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m23,25h-4v-2h4c3.86,0,7-3.14,7-7s-3.14-7-7-7h-4v-2h4c4.962,0,9,4.038,9,9s-4.038,9-9,9Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "8",
                y: "15",
                width: "16",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
