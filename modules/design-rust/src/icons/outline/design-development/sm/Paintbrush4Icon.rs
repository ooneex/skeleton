use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Paintbrush4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Paintbrush4Icon(props: Paintbrush4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 13V21H20V13",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 11.6943V13H20V11.6943C20 10.7166 19.2932 9.8822 18.3288 9.72147L14 9L14.6279 3.97683C14.8255 2.39616 13.593 1 12 1C10.407 1 9.17452 2.39616 9.3721 3.97683L10 9L5.6712 9.72147C4.70683 9.8822 4 10.7166 4 11.6943Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 21V18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
