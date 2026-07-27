use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDots3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDots3Icon(props: ConnectedDots3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "9.934",
                y: "10.5",
                width: "12.13",
                height: "2",
                transform: "translate(-3.454 8.369) rotate(-26.565)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            rect {
                x: "14.999",
                y: "14.434",
                width: "2",
                height: "12.13",
                transform: "translate(-9.491 25.642) rotate(-63.435)",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "7",
                cy: "16",
                r: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "25",
                cy: "7",
                r: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "25",
                cy: "25",
                r: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
