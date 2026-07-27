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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M1 25.5V42H28.5V25.5H1Z",
                fill: "currentColor",
            }
            path {
                d: "M29.3518 22.5L44.8812 6H17.7058L1.92749 22.5H29.3518Z",
                fill: "currentColor",
            }
            path {
                d: "M31.5 24.595L47 8.12622V24.5301L31.5 40.739V24.595Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
