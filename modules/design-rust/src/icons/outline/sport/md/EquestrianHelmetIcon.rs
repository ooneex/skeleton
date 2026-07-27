use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct EquestrianHelmetIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn EquestrianHelmetIcon(props: EquestrianHelmetIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 23C24.3807 23 25.5 21.8807 25.5 20.5C25.5 19.1193 24.3807 18 23 18C21.6193 18 20.5 19.1193 20.5 20.5C20.5 21.8807 21.6193 23 23 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 21V17.5C5 10.5964 10.5964 5 17.5 5V5C24.4036 5 30 10.5964 30 17.5V23C30 24.6569 28.6569 26 27 26H23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19 26H17.9614C17.3361 26 16.7265 25.8046 16.2177 25.4412L10.7823 21.5588C10.2735 21.1954 9.66387 21 9.0386 21H1",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M23 31V23V23.6667",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
