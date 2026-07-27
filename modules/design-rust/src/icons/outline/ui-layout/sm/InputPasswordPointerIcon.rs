use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InputPasswordPointerIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InputPasswordPointerIcon(props: InputPasswordPointerIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "7.25",
                cy: "11",
                r: "1.25",
                stroke_width: "0",
                fill: "currentColor",
                "data-cap": "butt",
            }
            path {
                d: "m22,11v-4c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v8c0,1.105.895,2,2,2h6",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            path {
                d: "m12.75,12.5l8.48,2.5-4,1.98-1.98,4s-2.5-8.48-2.5-8.48Z",
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
