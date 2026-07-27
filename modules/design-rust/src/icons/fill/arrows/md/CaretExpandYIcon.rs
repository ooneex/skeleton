use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretExpandYIcon(props: CaretExpandYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "8 19 16 29.667 24 19 8 19",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "16 2.333 8 13 24 13 16 2.333",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
