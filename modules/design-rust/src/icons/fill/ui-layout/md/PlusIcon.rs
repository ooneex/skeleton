use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlusIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlusIcon(props: PlusIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "2",
                y: "15",
                width: "28",
                height: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "2",
                width: "2",
                height: "28",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
