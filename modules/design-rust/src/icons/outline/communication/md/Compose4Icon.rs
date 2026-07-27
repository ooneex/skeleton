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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m17,3H6c-1.657,0-3,1.343-3,3v20c0,1.657,1.343,3,3,3h20c1.657,0,3-1.343,3-3v-11",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m17,19l-6,2,2-6L25.172,2.828c1.105-1.105,2.895-1.105,4,0h0c1.105,1.105,1.105,2.895,0,4l-12.172,12.172Z",
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
