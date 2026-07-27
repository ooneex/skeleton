use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AudioDescriptionIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AudioDescriptionIcon(props: AudioDescriptionIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "8.221 8 7.221 11 9.279 11 8.279 8 8.221 8",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16.5,8h-1.5v4h1.5c.551,0,1-.449,1-1v-2c0-.551-.449-1-1-1Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m20,2H4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h1v5.943l8.32-5.943h6.68c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-9.721,12l-.333-1h-3.392l-.333,1h-2.108l2.667-8h2.941l2.667,8h-2.108Zm9.221-3c0,1.654-1.346,3-3,3h-3.5V6h3.5c1.654,0,3,1.346,3,3v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
