use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TogglesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TogglesIcon(props: TogglesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,13H7c-2.757,0-5,2.243-5,5s2.243,5,5,5h10c2.757,0,5-2.243,5-5s-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m17,1H7c-2.757,0-5,2.243-5,5s2.243,5,5,5h10c2.757,0,5-2.243,5-5s-2.243-5-5-5ZM4,6c0-1.654,1.346-3,3-3s3,1.346,3,3-1.346,3-3,3-3-1.346-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
