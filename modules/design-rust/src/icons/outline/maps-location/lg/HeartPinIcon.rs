use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeartPinIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeartPinIcon(props: HeartPinIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 19.9032C8 32.8056 24 45 24 45C24 45 40 32.836 40 19.9032C40 9.7642 31.7993 4 24 4C16.2007 4 8 9.7642 8 19.9032Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 30C26.218 29 34 23.458 34 18.378C34 15.408 31.588 13 28.616 13C26.656 13 25.192 14.228 24 15.606C22.81 14.226 21.344 13 19.384 13C16.41 13 14 15.408 14 18.378C14 23.458 21.782 29 24 30Z",
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
