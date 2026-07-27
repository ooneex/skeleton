use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BrailleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BrailleIcon(props: BrailleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "6",
                cy: "4",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6",
                cy: "20",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "18",
                cy: "4",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "18",
                cy: "12",
                r: "3",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "6",
                cy: "12",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "18",
                cy: "20",
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
