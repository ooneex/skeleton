use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SweaterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SweaterIcon(props: SweaterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.5 19H4C3.44772 19 3 18.5523 3 18V6C3 4.34315 4.34315 3 6 3H8L8.27239 4.08957C8.70001 5.80005 10.2369 7 12 7V7C13.7631 7 15.3 5.80005 15.7276 4.08957L16 3H18C19.6569 3 21 4.34315 21 6V18C21 18.5523 20.5523 19 20 19H17.5",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M7 12V21H17V12",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M13 11H13.01",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
        }
    }
}
