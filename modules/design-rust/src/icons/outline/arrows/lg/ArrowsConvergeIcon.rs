use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowsConvergeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowsConvergeIcon(props: ArrowsConvergeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.5 14L8 14C5.23858 14 3 16.2386 3 19L3 36C3 38.7614 5.23858 41 8 41L40 41C42.7614 41 45 38.7614 45 36L45 19C45 16.2386 42.7614 14 40 14L28.5 14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-color": "color-2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M36.5 6L28.5 14L36.5 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11.5 6L19.5 14L11.5 22",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
