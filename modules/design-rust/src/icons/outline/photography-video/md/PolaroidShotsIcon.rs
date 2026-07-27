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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 7L6 7C4.34315 7 3 8.34314 3 10L3 26C3 27.6569 4.34315 29 6 29L22 29C23.6569 29 25 27.6569 25 26L25 10C25 8.34315 23.6569 7 22 7Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9 3L23 3C26.3137 3 29 5.68629 29 9L29 23",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7 23L21 23L21 11L7 11L7 23Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
