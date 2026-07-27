use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Iron2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Iron2Icon(props: Iron2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 26L30 26",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 18L9 18",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 10L13 10C14.6569 10 16 8.65685 16 7L16 6",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16 6L4 6C2.89543 6 2 6.89543 2 8L2 13.6667L6.47659 14.0812C8.01968 14.224 9.2 15.5187 9.2 17.0684L9.2 22L30 22L30 20C30 12.268 23.732 6 16 6Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
