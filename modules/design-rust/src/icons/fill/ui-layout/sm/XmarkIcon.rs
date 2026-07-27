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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "1.101",
                width: "2",
                height: "21.799",
                transform: "translate(-4.971 12) rotate(-45)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "1.101",
                y: "11",
                width: "21.799",
                height: "2",
                transform: "translate(-4.971 12) rotate(-45)",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
