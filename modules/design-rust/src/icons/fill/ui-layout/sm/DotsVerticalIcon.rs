use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DotsVerticalIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DotsVerticalIcon(props: DotsVerticalIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            circle {
                cx: "12",
                cy: "12",
                r: "1.75",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "3.75",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "12",
                cy: "20.25",
                r: "1.75",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
