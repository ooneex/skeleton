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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "12 1.8 6.036 10 17.964 10 12 1.8",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "6.036 14 12 22.2 17.964 14 6.036 14",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
