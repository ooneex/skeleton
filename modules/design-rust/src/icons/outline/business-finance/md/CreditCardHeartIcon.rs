use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CreditCardHeartIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CreditCardHeartIcon(props: CreditCardHeartIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 11H30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 27H5C3.34315 27 2 25.6569 2 24V8C2 6.34315 3.34315 5 5 5H27C28.6569 5 30 6.34315 30 8V15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 21H11",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 30.5C25.5526 29.7941 31 25.8821 31 22.2962C31 20.1998 29.3116 18.5 27.2312 18.5C25.8592 18.5 24.8344 19.3668 24 20.3395C23.167 19.3654 22.1408 18.5 20.7688 18.5C18.687 18.5 17 20.1998 17 22.2962C17 25.8821 22.4474 29.7941 24 30.5Z",
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
