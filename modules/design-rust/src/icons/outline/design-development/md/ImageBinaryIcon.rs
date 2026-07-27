use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ImageBinaryIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ImageBinaryIcon(props: ImageBinaryIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 16L6 27L6.5 26.431",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 5L5 5C3.34315 5 2 6.34315 2 8L2 24C2 25.6569 3.34315 27 5 27L16 27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20 1L20 31",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M8.5 15C9.88071 15 11 13.8807 11 12.5C11 11.1193 9.88071 10 8.5 10C7.11929 10 6 11.1193 6 12.5C6 13.8807 7.11929 15 8.5 15Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27.5 8V0.999958H25.4999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27.5001 31V24H25.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M30 17V15C30 13.3431 28.6569 12 27 12C25.3431 12 24 13.3431 24 15V17C24 18.6569 25.3431 20 27 20C28.6569 20 30 18.6569 30 17Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
