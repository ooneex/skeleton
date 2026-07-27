use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DotsIcon(props: DotsIconProps) -> Element {
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
                r: "2",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "3",
                cy: "12",
                r: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "21",
                cy: "12",
                r: "2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
