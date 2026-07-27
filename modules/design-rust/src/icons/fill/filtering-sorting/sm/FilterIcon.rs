use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct FilterIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn FilterIcon(props: FilterIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "2 2 2 5.376 9 13.376 9 23.618 15 20.618 15 13.376 22 5.376 22 2 2 2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
