use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadmapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadmapIcon(props: RoadmapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.75 6L3 16.5L10.75 27H29C31.7614 27 34 24.7614 34 22V11C34 8.23858 31.7614 6 29 6H10.75Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M14 32V37C14 39.7614 16.2386 42 19 42H37.25L45 31.5L39.2236 23.6738",
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
