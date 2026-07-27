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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M6.5 15.5C6.5 18.5376 8.96243 21 12 21C15.0376 21 17.5 18.5376 17.5 15.5C17.5 12.4624 15.0376 10 12 10C8.96243 10 6.5 12.4624 6.5 15.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M8.5 6.5C8.5 8.433 10.067 10 12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.567 13.933 3 12 3C10.067 3 8.5 4.567 8.5 6.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
