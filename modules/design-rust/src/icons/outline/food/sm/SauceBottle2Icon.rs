use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SauceBottle2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SauceBottle2Icon(props: SauceBottle2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M9 6H15",
                stroke: "currentColor",
                stroke_width: "2",
                "data-color": "color-2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M15.0359 2V8.5L17.0524 10.8811C17.6642 11.6035 18 12.5195 18 13.4662V22H6V13.3898C6 12.4084 6.36085 11.4611 7.01388 10.7284L9 8.5V2H15.0359Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_miterlimit: "10",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M10.5711 18H13.4291L14.5 14.5L14.1213 14.1213C12.9497 12.9497 11.0503 12.9497 9.87868 14.1213L9.5 14.5L10.5711 18Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "round",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
