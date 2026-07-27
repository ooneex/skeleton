use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Pill2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Pill2Icon(props: Pill2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 10L22 22",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M16.7875 27L27 16.7875C30.255 13.5325 30.255 8.25504 27 5.00002C23.745 1.745 18.4675 1.745 15.2125 5.00002L5 15.2125C1.74498 18.4676 1.74498 23.745 5 27C8.25502 30.255 13.5324 30.255 16.7875 27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18.4007 8.1143C19.9154 6.59968 22.371 6.59968 23.8857 8.1143",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
