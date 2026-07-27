use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BookOpen3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BookOpen3Icon(props: BookOpen3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 5.38647V17.8452",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M2 20L2 21L9.5 21L10 22L14 22L14.5 21L22 21L22 20",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M23 4.17564V16.6266C20.7143 15.5833 14.2857 15.7256 12 17.9509C9.71429 15.7256 3.28571 15.5835 1 16.6267V4.17576C3.28571 3.13259 9.71429 3.27467 12 5.49999C14.2857 3.27471 20.7143 3.13235 23 4.17564Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
