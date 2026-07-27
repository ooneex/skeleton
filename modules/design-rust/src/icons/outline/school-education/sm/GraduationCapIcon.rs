use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct GraduationCapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn GraduationCapIcon(props: GraduationCapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.9309 8.5L12 14L2.07704 8.50001L12 3L21.9309 8.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5 10V18L5.55019 18.3144C9.54682 20.5982 14.4532 20.5982 18.4498 18.3144L19 18V10",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M23 13V18",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
