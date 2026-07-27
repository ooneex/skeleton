use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct KnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn KnifeIcon(props: KnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 36L12.6089 44.2734C11.3652 45.4996 9.36014 45.4755 8.14624 44.22V44.22C6.95509 42.9879 6.97163 41.0284 8.1834 39.8166L16.5 31.5",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M7.52334 22.6066L20.9584 36.0416L45 12L39.3431 6.34315C35.0474 2.04738 28.0826 2.04738 23.7868 6.34315L7.52334 22.6066Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.9549 27.2951L28.4402 18.8098",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
