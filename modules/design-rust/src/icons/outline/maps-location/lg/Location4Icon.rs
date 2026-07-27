use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Location4IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Location4Icon(props: Location4IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 38L21 22.5422C16.9429 21.2679 14 17.4776 14 13C14 7.47715 18.4772 3 24 3C29.5228 3 34 7.47715 34 13C34 17.4776 31.0571 21.2679 27 22.5422L25 38H23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 13C19 10.2386 21.2386 8 24 8",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 31.3982C8.84365 32.3591 3 34.952 3 37.9999C3 41.8659 12.402 44.9999 24 44.9999C35.598 44.9999 45 41.8659 45 37.9999C45 34.952 39.1563 32.3591 31 31.3982",
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
