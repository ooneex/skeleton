use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ParagraphSpacingIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ParagraphSpacingIcon(props: ParagraphSpacingIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 17L3 17",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 2H3",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 22L3 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.99999 11.5L12 13.5L14 11.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M10 7.50001L12 5.5L14 7.5",
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
