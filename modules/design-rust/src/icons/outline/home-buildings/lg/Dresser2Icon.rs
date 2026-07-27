use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Dresser2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Dresser2Icon(props: Dresser2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38 43H10C7.23857 43 5 40.7741 5 38.0127V9.98597C5 7.22455 7.23857 5 10 5H38C40.7614 5 43 7.22728 43 9.9887V38.0113C43 40.7727 40.7614 43 38 43Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M27 14H21C19.8954 14 19 12.966 19 11.8614C19 10.7568 19.8954 10 21 10H27C28.1046 10 29 10.8954 29 12C29 13.1046 28.1046 14 27 14Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M27 33H21C19.8954 33 19 31.966 19 30.8614C19 29.7568 19.8954 29 21 29H27C28.1046 29 29 29.8954 29 31C29 32.1046 28.1046 33 27 33Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M5 24H43",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M13 43V46",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M35 43V46",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
