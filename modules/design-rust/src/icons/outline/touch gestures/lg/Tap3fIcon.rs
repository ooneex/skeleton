use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tap3fIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tap3fIcon(props: Tap3fIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 43V25C19 22.2386 21.2386 20 24 20V20C26.7614 20 29 22.2386 29 25V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M29 43V29C29 26.2386 31.2386 24 34 24V24C36.7614 24 39 26.2386 39 29V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 43V29C9 26.2386 11.2386 24 14 24V24C16.7614 24 19 26.2386 19 29V43",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M4 28.589C3.35799 27.1922 3 25.6379 3 24C3 18.1229 7.60901 13.3223 13.4097 13.0156C14.7104 8.3906 18.9592 5 24 5C29.0408 5 33.2896 8.3906 34.5903 13.0156C40.391 13.3223 45 18.1229 45 24C45 25.6379 44.642 27.1922 44 28.589",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
