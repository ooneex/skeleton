use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AlertWarningIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AlertWarningIcon(props: AlertWarningIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "15",
                y: "2",
                width: "2",
                height: "21",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "16",
                cy: "28",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
