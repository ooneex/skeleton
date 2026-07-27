use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RectLayoutGrid2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RectLayoutGrid2Icon(props: RectLayoutGrid2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m20,2H4c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-5,12H3v-4h12v4ZM4,4h11v4H3v-3c0-.551.449-1,1-1Zm-1,15v-3h12v4H4c-.551,0-1-.449-1-1Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
