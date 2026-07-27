use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SackIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SackIcon(props: SackIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 12.0001L16 10L14 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15.9999 30C8.82022 30 3.77771 27.7815 3.77771 21.8068C3.77771 17.4614 7.55861 12.033 11.9999 9H19.9999C24.4412 12.033 28.2221 17.4614 28.2221 21.8068C28.2221 27.7815 23.1796 30 15.9999 30Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.9999 9L8.71423 3.16667L12.1428 2L15.9999 5.33333L20 2L23.4286 3.16667L20.1429 9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M18 17L15 17C13.8954 17 13 17.8954 13 19V19C13 20.1046 13.8954 21 15 21H17C18.1046 21 19 21.8954 19 23V23C19 24.1046 18.1046 25 17 25H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 17V16",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M16 26V25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
