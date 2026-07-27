use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PlaneIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PlaneIcon(props: PlaneIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M0.0809956 6H2.74615L5 9H21C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15H14.5L9.99357 22.4856L6.68923 21.597L9.07497 15H5.40944C4.1416 15 3.01063 14.203 2.58421 13.009L0.0809956 6Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M9.93715 1.61528L6.63281 2.50389L8.26868 7.02734H13.1953L9.93715 1.61528Z",
                fill: "currentColor",
            }
        }
    }
}
