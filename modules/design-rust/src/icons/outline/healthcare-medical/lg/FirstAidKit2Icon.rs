use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FirstAidKit2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FirstAidKit2Icon(props: FirstAidKit2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 10.9563V3H32V10.9563",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M40 11H8C5.23858 11 3 13.2386 3 16V38C3 40.7614 5.23858 43 8 43H40C42.7614 43 45 40.7614 45 38V16C45 13.2386 42.7614 11 40 11Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 24L21 18H27L27 24H33L33 30H27V36H21V30H15L15 24H21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
