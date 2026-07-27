use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HeadphonesIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HeadphonesIcon(props: HeadphonesIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M7 6.5L9.5 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M25 6.5L22.5 9.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M3 23V16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16V23C29 26.3137 26.3137 29 23 29H21V21C21 19.3431 22.3431 18 24 18H25V16C25 11.0294 20.9706 7 16 7C11.0294 7 7 11.0294 7 16V18H8C9.65685 18 11 19.3431 11 21V29H9C5.68629 29 3 26.3137 3 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
