use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct InfoPointIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn InfoPointIcon(props: InfoPointIconProps) -> Element {
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
                cy: "3.25",
                r: "3.25",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "21 14 3 14 3 16 5 16 5 24 19 24 19 16 21 16 21 14",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m16.899,12c-.465-2.279-2.484-4-4.899-4s-4.434,1.721-4.899,4h9.798Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
