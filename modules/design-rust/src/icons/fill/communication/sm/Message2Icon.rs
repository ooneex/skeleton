use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Message2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Message2Icon(props: Message2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,2H4c-1.654,0-3,1.346-3,3v11c0,1.654,1.346,3,3,3h4.5l3.5,4.667,3.5-4.667h4.5c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
