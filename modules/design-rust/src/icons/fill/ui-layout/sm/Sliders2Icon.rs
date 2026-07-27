use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Sliders2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Sliders2Icon(props: Sliders2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m22,4h-10.142c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3h-2.142v2h2.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h10.142v-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m22,11h-2.142c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3H2v2h10.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h2.142v-2Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            path {
                d: "m22,18h-10.142c-.447-1.72-1.999-3-3.858-3s-3.411,1.28-3.858,3h-2.142v2h2.142c.447,1.72,1.999,3,3.858,3s3.411-1.28,3.858-3h10.142v-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
