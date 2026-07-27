use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Compose4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Compose4Icon(props: Compose4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m10,4h-5c-1.105,0-2,.895-2,2v13c0,1.105.895,2,2,2h13c1.105,0,2-.895,2-2v-5",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m12,15l-4,1,1-4L18,3c.828-.828,2.172-.828,3,0h0c.828.828.828,2.172,0,3l-9,9Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
