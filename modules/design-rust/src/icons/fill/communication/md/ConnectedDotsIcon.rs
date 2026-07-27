use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ConnectedDotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ConnectedDotsIcon(props: ConnectedDotsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "22.458 21.755 17 17.511 17 11 15 11 15 17.511 9.542 21.755 10.77 23.334 16 19.267 21.23 23.334 22.458 21.755",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "16",
                cy: "7",
                r: "5",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "7",
                cy: "25",
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
