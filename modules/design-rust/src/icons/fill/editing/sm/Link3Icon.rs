use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link3Icon(props: Link3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,16h-3v-2h3c.551,0,1-.449,1-1v-7c0-.551-.449-1-1-1H4c-.551,0-1,.449-1,1v7c0,.551.449,1,1,1h1v2h-1c-1.654,0-3-1.346-3-3v-7c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v7c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,21h-10c-1.654,0-3-1.346-3-3v-7c0-1.654,1.346-3,3-3h3v2h-3c-.551,0-1,.449-1,1v7c0,.551.449,1,1,1h10c.551,0,1-.449,1-1v-7c0-.551-.449-1-1-1h-1v-2h1c1.654,0,3,1.346,3,3v7c0,1.654-1.346,3-3,3Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
