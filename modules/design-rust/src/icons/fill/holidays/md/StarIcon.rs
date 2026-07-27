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
                points: "31.995 12 19.734 12 16 .07 12.266 12 .005 12 9.774 19.341 5.921 31.201 16 23.878 26.079 31.201 22.226 19.341 31.995 12",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
