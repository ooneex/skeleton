use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tag2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tag2Icon(props: Tag2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m22.121,11.207L11.914,1H1v10.914l5,5v-8.192c-.595-.347-1-.985-1-1.722,0-1.103.897-2,2-2s2,.897,2,2v12.914l2.207,2.207c.585.585,1.353.877,2.121.877s1.537-.292,2.122-.877l6.671-6.671c1.17-1.17,1.17-3.073,0-4.243Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m5,7v16h2v-14c-1.105,0-2-.895-2-2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
