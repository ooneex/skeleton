use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tag2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tag2Icon(props: Tag2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,27l2.121,2.121c1.171,1.172,3.071,1.172,4.243,0h0s8.757-8.757,8.757-8.757c1.172-1.171,1.172-3.071,0-4.243h0S15,2,15,2H2v13l8,8",
                fill: "none",
                stroke: "currentColor",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-cap": "butt",
            }
            circle {
                cx: "10",
                cy: "10",
                r: "2",
                fill: "currentColor",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
                "data-color": "color-2",
            }
            line {
                x1: "10",
                y1: "12",
                x2: "10",
                y2: "30",
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
