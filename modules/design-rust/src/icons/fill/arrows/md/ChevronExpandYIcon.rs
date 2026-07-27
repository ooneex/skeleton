use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChevronExpandYIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChevronExpandYIcon(props: ChevronExpandYIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "16 29.414 8.586 22 10 20.586 16 26.586 22 20.586 23.414 22 16 29.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "22 11.414 16 5.414 10 11.414 8.586 10 16 2.586 23.414 10 22 11.414",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
