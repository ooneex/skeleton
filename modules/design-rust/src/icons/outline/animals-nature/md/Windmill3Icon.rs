use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Windmill3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Windmill3Icon(props: Windmill3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 11.3333L25.3333 2L30 6.66667L23.7 11.1",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M16 20.6667L6.66667 30L2.00001 25.3333L8.30001 20.9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M20.6667 16L30 25.3334L25.3333 30L20.9 23.7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11.3333 16L2 6.66664L6.66667 1.99998L11.1 8.29999",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            rect {
                x: "16",
                y: "11.3333",
                width: "6.59966",
                height: "6.59966",
                transform: "rotate(45 16 11.3333)",
                stroke: "currentColor",
                stroke_width: "2",
                fill: "none",
                "data-cap": "butt",
            }
        }
    }
}
