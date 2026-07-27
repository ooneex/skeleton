use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DatabaseIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DatabaseIcon(props: DatabaseIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M41 24C41 27.3137 33.3888 30 24 30C14.6112 30 7 27.3137 7 24",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M41 10V9V39.3158C41 42.4421 33.35 45 24 45C14.65 45 7 42.4421 7 39.3158V9V10",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 15C33.3888 15 41 12.3137 41 9C41 5.68629 33.3888 3 24 3C14.6112 3 7 5.68629 7 9C7 12.3137 14.6112 15 24 15Z",
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
