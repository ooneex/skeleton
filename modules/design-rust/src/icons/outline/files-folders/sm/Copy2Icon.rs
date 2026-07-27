use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Copy2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Copy2Icon(props: Copy2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.5 8H19.5C20.3284 8 21 8.67157 21 9.5V20.5C21 21.3284 20.3284 22 19.5 22H10.5C9.67157 22 9 21.3284 9 20.5V9.5C9 8.67157 9.67157 8 10.5 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 4V3.5C15 2.67157 14.3284 2 13.5 2L4.5 2C3.67157 2 3 2.67157 3 3.5L3 14.5C3 15.3284 3.67157 16 4.5 16H5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
