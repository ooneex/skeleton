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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "16 3.417 19 13 29 13 21.054 18.971 24.177 28.583 16 22.642 7.823 28.583 10.946 18.971 3 13 13 13 16 3.417",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
