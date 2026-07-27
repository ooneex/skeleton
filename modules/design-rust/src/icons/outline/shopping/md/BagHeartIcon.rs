use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BagHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BagHeartIcon(props: BagHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 13V6C11 3.239 13.239 1 16 1C18.761 1 21 3.239 21 6V13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M25.9999 14V9H5.99994V16L3.84792 25.3254C3.41411 27.2053 4.84184 29 6.77109 29H14.9999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 30C24.5526 29.2941 30 25.3821 30 21.7962C30 19.6998 28.3116 18 26.2312 18C24.8592 18 23.8344 18.8668 23 19.8395C22.167 18.8654 21.1408 18 19.7688 18C17.687 18 16 19.6998 16 21.7962C16 25.3821 21.4474 29.2941 23 30Z",
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
