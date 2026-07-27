use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FullScreen2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FullScreen2Icon(props: FullScreen2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m4,9h-2v-4c0-1.654,1.346-3,3-3h4v2h-4c-.552,0-1,.449-1,1v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m22,9h-2v-4c0-.551-.448-1-1-1h-4v-2h4c1.654,0,3,1.346,3,3v4Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m19,22h-4v-2h4c.552,0,1-.449,1-1v-4h2v4c0,1.654-1.346,3-3,3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m9,22h-4c-1.654,0-3-1.346-3-3v-4h2v4c0,.551.448,1,1,1h4v2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            rect {
                x: "7",
                y: "7",
                width: "10",
                height: "10",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
