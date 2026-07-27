use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct MilitaryKnifeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn MilitaryKnifeIcon(props: MilitaryKnifeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M11 12L9.5 10.5L9.59302 10.593",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M14 9L12.5 7.5L12.593 7.59302",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M7.1699 19.8301L5.62876 21.3712C4.80033 22.1996 3.45719 22.1996 2.62876 21.3712V21.3712V21.3712C1.80033 20.5428 1.80034 19.1996 2.62876 18.3712L4.16532 16.8347",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                "data-color": "color-2",
                fill: "none",
            }
            path {
                d: "M11 18L19.776 9.209C20.6859 8.29787 21.2918 7.12777 21.5109 5.85892C21.7301 4.59007 21.5516 3.2845 21 2.121C19.5 3.5 18 5 15.6 4.4L6.53104 13.469",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
            path {
                d: "M5.34252 12.3425L12 19",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
