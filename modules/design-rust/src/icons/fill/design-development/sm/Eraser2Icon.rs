use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Eraser2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Eraser2Icon(props: Eraser2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.62427 3H22.6243L14.6243 10H0.624268L8.62427 3Z",
                fill: "currentColor",
            }
            path {
                d: "M0 12V21H14V12H0Z",
                fill: "currentColor",
            }
            path {
                d: "M16 20.4538L24 13.4538V4.45386L16 11.4539V20.4538Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
