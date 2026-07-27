use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSevenIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSevenIcon(props: NumberSevenIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 29V29C14 21.4608 16.2027 14.086 20.3375 7.78177L23 3.72222V3H9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
