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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "17.142 15.444 13 12.486 13 8 11 8 11 12.485 6.858 15.444 8.021 17.071 12 14.229 15.979 17.071 17.142 15.444",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            circle {
                cx: "12",
                cy: "5",
                r: "4",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "5",
                cy: "18",
                r: "4",
                stroke_width: "0",
                fill: "currentColor",
            }
            circle {
                cx: "19",
                cy: "18",
                r: "4",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
