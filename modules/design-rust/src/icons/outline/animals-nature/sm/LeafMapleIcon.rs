use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LeafMapleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LeafMapleIcon(props: LeafMapleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 22L7.5 16.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M22 18L20 16L21 14L16 13L22 8L20 7L21 3L17 4L16 2L11 8L10 3L8 4L6 2L5 5H3L5 11L3 13L8 16L11 21L13 19L19 21V19L22 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
