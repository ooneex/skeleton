use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid3Icon(props: RectLayoutGrid3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "11",
                width: "2",
                height: "18",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm0,26H6c-1.103,0-2-.897-2-2v-14h24v14c0,1.103-.897,2-2,2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
