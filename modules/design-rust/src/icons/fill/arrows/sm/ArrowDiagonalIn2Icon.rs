use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowDiagonalIn2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowDiagonalIn2Icon(props: ArrowDiagonalIn2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m13,11h9v-6c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6v-9c0-1.104.896-2,2-2Z",
                stroke_width: "0",
                fill: "currentColor",
            }
            polygon {
                points: "22.707 21.293 16.414 15 22 15 22 13 13 13 13 22 15 22 15 16.414 21.293 22.707 22.707 21.293",
                fill: "currentColor",
                stroke_width: "0",
                "data-color": "color-2",
            }
        }
    }
}
