use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Link2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Link2Icon(props: Link2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 19L27 17C27 14.7909 28.7909 13 31 13H42C44.2091 13 46 14.7909 46 17V31C46 33.2091 44.2091 35 42 35H31C28.7909 35 27 33.2091 27 31V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M21 19L21 17C21 14.7909 19.2091 13 17 13H6C3.79086 13 2 14.7909 2 17V31C2 33.2091 3.79086 35 6 35H17C19.2091 35 21 33.2091 21 31V29",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M15 24H33",
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
