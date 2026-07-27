use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TrashIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TrashIcon(props: TrashIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4.166,8l.505,12.125c.067,1.612,1.384,2.875,2.998,2.875h8.663c1.613,0,2.93-1.263,2.998-2.875l.505-12.125H4.166Zm6.334,11h-2v-8h2v8Zm5,0h-2v-8h2v8Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m19,3h-4c0-1.103-.897-2-2-2h-2c-1.103,0-2,.897-2,2h-4c-1.654,0-3,1.346-3,3v3h20v-3c0-1.654-1.346-3-3-3Zm1,4H4v-1c0-.552.449-1,1-1h14c.551,0,1,.448,1,1v1Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
