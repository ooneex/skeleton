use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct NumberFiveIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn NumberFiveIcon(props: NumberFiveIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16 3H7V10H11.5C14.5376 10 17 12.4624 17 15.5V15.5C17 18.5376 14.5376 21 11.5 21H7",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
