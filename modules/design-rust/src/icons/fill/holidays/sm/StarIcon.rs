use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct StarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn StarIcon(props: StarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "23.95 9 14.964 9 12 -.289 9.036 9 .05 9 7.215 14.489 4.249 23.618 12 17.987 19.751 23.618 16.785 14.489 23.95 9",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
