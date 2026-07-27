use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AnimationBounceIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AnimationBounceIcon(props: AnimationBounceIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m21,10c-5,0-8,4-8.9999,11.3333h-.1c-1.0001-7.3333-2.4001-13.3333-9.9001-16.3333",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m26,15c2.7614,0,5-2.2386,5-5s-2.2386-5-5-5-5,2.2386-5,5,2.2386,5,5,5Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m4,28c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m20,28c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m12,28c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            path {
                d: "m28,28c.5523,0,1-.4477,1-1s-.4477-1-1-1-1,.4477-1,1,.4477,1,1,1Z",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
        }
    }
}
