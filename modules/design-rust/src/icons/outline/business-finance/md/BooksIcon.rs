use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct BooksIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn BooksIcon(props: BooksIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            rect {
                x: "3",
                y: "3",
                width: "10",
                height: "26",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            rect {
                x: "13.9351",
                y: "4.72003",
                width: "10",
                height: "25",
                transform: "rotate(-15 13.9351 4.72003)",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
            path {
                d: "M3 24H13",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M19.1115 24.0385L28.7708 21.4504",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8 8L8 15",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M20.0588 8.25555L21.8706 15.017",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
