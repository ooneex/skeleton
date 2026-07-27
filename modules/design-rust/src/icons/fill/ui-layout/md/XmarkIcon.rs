use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct XmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn XmarkIcon(props: XmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "-.556",
                y: "15",
                width: "33.112",
                height: "2",
                transform: "translate(-6.627 16) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "15",
                y: "-.556",
                width: "2",
                height: "33.112",
                transform: "translate(-6.627 16) rotate(-45)",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
