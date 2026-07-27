use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberSixIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberSixIcon(props: NumberSixIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15 3H14.5C10.0817 3 6.5 6.58172 6.5 11V15.5V15.281",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
            path {
                d: "M6.5 15.5C6.5 18.5376 8.96243 21 12 21C15.0376 21 17.5 18.5376 17.5 15.5C17.5 12.4624 15.0376 10 12 10C8.96243 10 6.5 12.4624 6.5 15.5Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
