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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 3H9.00003V13H15C19.4183 13 23 16.5817 23 21V21C23 25.4183 19.4183 29 15 29H9",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
