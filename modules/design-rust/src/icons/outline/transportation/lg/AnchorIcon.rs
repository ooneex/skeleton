use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct AnchorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn AnchorIcon(props: AnchorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 11V42",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M24 11C26.2091 11 28 9.20914 28 7C28 4.79086 26.2091 3 24 3C21.7909 3 20 4.79086 20 7C20 9.20914 21.7909 11 24 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M18 18H30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M9.42857 26.8947L6 26C6.85714 38.5263 20.4509 36.2439 24 43C27.549 36.2439 41.1429 38.5263 42 26L38.5714 26.8947",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
