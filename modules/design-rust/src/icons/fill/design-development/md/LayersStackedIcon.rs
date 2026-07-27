use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct LayersStackedIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn LayersStackedIcon(props: LayersStackedIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            polygon {
                points: "5.382 3 .382 13 26.618 13 31.618 3 5.382 3",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m28.407,21.895c-.339.677-1.031,1.105-1.789,1.105H3.382L.382,29h26.236l5-10h-1.764l-1.447,2.895Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            path {
                d: "m28.407,13.895c-.339.677-1.031,1.105-1.789,1.105H3.382L.382,21h26.236l5-10h-1.764l-1.447,2.895Z",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
