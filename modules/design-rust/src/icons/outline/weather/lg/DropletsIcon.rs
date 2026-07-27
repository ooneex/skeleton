use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DropletsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DropletsIcon(props: DropletsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M38.5 4C42.283 7.05723 45 11.7483 45 15C45 19.0782 42.0896 22 38.5 22C34.9104 22 32 19.0782 32 15C32 11.7483 34.717 7.05723 38.5 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M9.5 4C13.283 7.05723 16 11.7483 16 15C16 19.0782 13.0896 22 9.5 22C5.91037 22 3 19.0782 3 15C3 11.7483 5.717 7.05723 9.5 4Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M24 21C29.238 25.0763 33 31.1643 33 35.5C33 40.9375 28.9703 45 24 45C19.0297 45 15 40.9375 15 35.5C15 31.1643 18.762 25.0763 24 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M24 40C21.7909 40 20 38.2091 20 36",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
