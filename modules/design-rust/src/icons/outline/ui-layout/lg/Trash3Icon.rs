use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Trash3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Trash3Icon(props: Trash3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M43 9H5V15H43V9Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 20L11.6319 40.3987C11.8398 42.9972 14.0092 45 16.616 45H31.384C33.9908 45 36.1602 42.9972 36.3681 40.3987L38 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18 9V5.5C18 4.11929 19.1193 3 20.5 3H27.5C28.8807 3 30 4.11929 30 5.5V9",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
