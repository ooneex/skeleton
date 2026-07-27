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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21.1429 43V43C21.1429 31.9726 24.3063 21.1766 30.2577 11.893L34 6.05556V5H14",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
