use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shield2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shield2Icon(props: Shield2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "15 15 15 1.219 3 4.219 3 15 15 15",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "17 15 29 15 29 4.219 17 1.219 17 15",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m17,30.698c2.661-1.037,12-5.277,12-13.698h-12v13.698Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m15,17H3c0,8.421,9.339,12.661,12,13.698v-13.698Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
