use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Shirt3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Shirt3Icon(props: Shirt3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 23V14.0241V14.433",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M34 7H38C40.7614 7 43 9.23858 43 12V38C43 40.7614 40.7614 43 38 43H10C7.23858 43 5 40.7614 5 38V12C5 9.23858 7.23858 7 10 7H14",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M14 3L24 13.5L34 3",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M34 3V18H33L24 14L15 18H14V3H34Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                fill: "none",
            }
            path {
                d: "M38 27H29V33L33.5 35.5L38 33V27Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
