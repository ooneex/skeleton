use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ObjAddIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ObjAddIcon(props: ObjAddIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "18 7 13 7 13 2 11 2 11 7 6 7 6 9 11 9 11 14 13 14 13 9 18 9 18 7",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m19,22H5c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.448,1,1,1h14c.552,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
