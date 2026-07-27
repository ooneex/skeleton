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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "11",
                y: "2",
                width: "2",
                height: "14",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "20.5",
                r: "1.5",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
