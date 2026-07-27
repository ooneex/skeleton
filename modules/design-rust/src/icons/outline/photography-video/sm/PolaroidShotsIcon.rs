use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PolaroidShotsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PolaroidShotsIcon(props: PolaroidShotsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3 17H17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M17 19L17 9C17 7.89543 16.1046 7 15 7L5 7C3.89543 7 3 7.89543 3 9L3 19C3 20.1046 3.89543 21 5 21L15 21C16.1046 21 17 20.1046 17 19Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 16L21 8C21 5.23858 18.7614 3 16 3L8 3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
