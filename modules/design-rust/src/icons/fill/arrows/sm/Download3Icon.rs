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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m18,7h-5v7.586l3-3,1.414,1.414-5.414,5.414-5.414-5.414,1.414-1.414,3,3v-7.586h-5c-1.654,0-3,1.346-3,3v9c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3v-9c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "11",
                width: "2",
                height: "7",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
