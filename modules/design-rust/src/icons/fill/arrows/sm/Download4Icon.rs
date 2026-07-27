use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Download4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Download4Icon(props: Download4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,22H5c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.449,1,1,1h14c.551,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "17 8.586 13 12.586 13 2 11 2 11 12.586 7 8.586 5.586 10 12 16.414 18.414 10 17 8.586",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
