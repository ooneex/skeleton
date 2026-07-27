use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct HybridCarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn HybridCarIcon(props: HybridCarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10 15L10 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 15L14 12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20 18.0021C22.9469 14.0846 22.6372 8.49507 19.0711 4.92892C15.1658 1.02367 8.83418 1.02367 4.92893 4.92892C1.36278 8.49507 1.05313 14.0846 4 18.0021",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7.75736 7.75735C10.1005 5.4142 13.8995 5.4142 16.2426 7.75735",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 15L8 17C8 19.2091 9.79086 21 12 21C14.2091 21 16 19.2091 16 17L16 15L8 15Z",
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
