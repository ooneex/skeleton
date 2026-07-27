use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ObjRemoveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ObjRemoveIcon(props: ObjRemoveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "6",
                y: "7",
                width: "12",
                height: "2",
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
