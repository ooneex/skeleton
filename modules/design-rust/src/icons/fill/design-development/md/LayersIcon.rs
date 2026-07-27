use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LayersIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LayersIcon(props: LayersIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "16 24.136 1.646 16.406 2.594 14.646 16 21.864 29.406 14.646 30.354 16.406 16 24.136",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "16 30.136 1.646 22.406 2.594 20.646 16 27.864 29.406 20.646 30.354 22.406 16 30.136",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
            polygon {
                points: "16 1.864 .891 10 16 18.136 31.109 10 16 1.864",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
