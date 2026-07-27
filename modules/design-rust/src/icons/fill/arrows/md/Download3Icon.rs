use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Download3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Download3Icon(props: Download3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m25,9h-8v12.586l5-5,1.414,1.414-7.414,7.414-7.414-7.414,1.414-1.414,5,5v-12.586H7c-2.206,0-4,1.794-4,4v14c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4v-14c0-2.206-1.794-4-4-4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "15",
                width: "2",
                height: "9",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
