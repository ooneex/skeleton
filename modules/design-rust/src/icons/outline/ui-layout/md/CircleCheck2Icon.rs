use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CircleCheck2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CircleCheck2Icon(props: CircleCheck2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m22.25,3.489c-1.882-.946-4-1.489-6.25-1.489-7.732,0-14,6.268-14,14s6.268,14,14,14,14-6.268,14-14c0-1.779-.356-3.468-.965-5.032",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
            polyline {
                points: "9 14 15 20 30 2",
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
