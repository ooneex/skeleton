use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberEightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberEightIcon(props: NumberEightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8 21C8 25.4183 11.5817 29 16 29C20.4183 29 24 25.4183 24 21C24 16.5817 20.4183 13 16 13C11.5817 13 8 16.5817 8 21Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M11 8C11 10.7614 13.2386 13 16 13C18.7614 13 21 10.7614 21 8C21 5.23858 18.7614 3 16 3C13.2386 3 11 5.23858 11 8Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
