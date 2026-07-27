use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Flag3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Flag3Icon(props: Flag3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M4 5L6.70397 4.09868C8.78362 3.40546 11.0668 3.71122 12.8908 4.92721V4.92721C14.8372 6.22478 17.2976 6.48096 19.4695 5.61219L21 5V17L19.4695 17.6122C17.2976 18.481 14.8372 18.2248 12.8908 16.9272V16.9272C11.0668 15.7112 8.78362 15.4055 6.70397 16.0987L4 17",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M4 22V2",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
