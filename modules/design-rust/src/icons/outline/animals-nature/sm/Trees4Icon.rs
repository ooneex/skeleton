use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trees4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trees4Icon(props: Trees4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 15V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M19 21V23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8 19.5C11.3137 19.5 14 16.8137 14 13.5C14 7.18629 8 1.5 8 1.5C8 1.5 2 7.18629 2 13.5C2 16.8137 4.68629 19.5 8 19.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 21C20.6569 21 22 19.6569 22 18C22 14.8431 19 12 19 12C19 12 16 14.8431 16 18C16 19.6569 17.3431 21 19 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
