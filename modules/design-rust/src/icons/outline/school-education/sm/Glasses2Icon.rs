use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Glasses2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Glasses2Icon(props: Glasses2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 4V4C19.6569 4 21 5.34315 21 7V14V13.2698",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M6 4V4C4.34315 4 3 5.34315 3 7V14V13.2698",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M15.0497 17.0092C14.6437 15.8428 13.4732 15 12.0925 15H12C10.602 15 9.4132 15.8392 8.97635 17.0092",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.5 20C7.433 20 9 18.433 9 16.5C9 14.567 7.433 13 5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M18.5 20C20.433 20 22 18.433 22 16.5C22 14.567 20.433 13 18.5 13C16.567 13 15 14.567 15 16.5C15 18.433 16.567 20 18.5 20Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
