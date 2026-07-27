use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct RoadmapIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn RoadmapIcon(props: RoadmapIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m14,3H5.52L.719,9l4.8,6h8.48c1.654,0,3-1.346,3-3v-6c0-1.654-1.346-3-3-3Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m18.48,21h-8.48c-1.654,0-3-1.346-3-3v-1h2v1c0,.551.449,1,1,1h7.52l3.141-3.926-2.074-2.074,1.414-1.414,3.34,3.34-4.859,6.074Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
