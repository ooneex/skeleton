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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10,19h-3c-3.859,0-7-3.14-7-7s3.141-7,7-7h3v2h-3c-2.757,0-5,2.243-5,5s2.243,5,5,5h3v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m17,19h-3v-2h3c2.757,0,5-2.243,5-5s-2.243-5-5-5h-3v-2h3c3.859,0,7,3.14,7,7s-3.141,7-7,7Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7",
                y: "11",
                width: "10",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
