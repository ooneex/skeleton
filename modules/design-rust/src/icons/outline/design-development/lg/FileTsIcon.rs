use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FileTsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FileTsIcon(props: FileTsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M25 3V17H40",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M8 25L8 8C8 5.23858 10.2386 3 13 3L26 3L40 16L40 25",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M34 30H28.5C26.567 30 25 31.567 25 33.5V33.5C25 35.433 26.567 37 28.5 37H32.5C34.433 37 36 38.567 36 40.5V40.5C36 42.433 34.433 44 32.5 44H27",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M17 44V30M17 30H22M17 30L12 30",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
