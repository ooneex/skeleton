use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct TextSizeChangeIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn TextSizeChangeIcon(props: TextSizeChangeIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "22 12.414 19 9.414 16 12.414 14.586 11 19 6.586 23.414 11 22 12.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "19 20.414 14.586 16 16 14.586 19 17.586 22 14.586 23.414 16 19 20.414",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "19 2 1 2 1 4 9 4 9 22 11 22 11 4 19 4 19 2",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
