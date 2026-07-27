use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct SquareXmarkIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn SquareXmarkIcon(props: SquareXmarkIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-2.086,13.5l-1.414,1.414-3.5-3.5-3.5,3.5-1.414-1.414,3.5-3.5-3.5-3.5,1.414-1.414,3.5,3.5,3.5-3.5,1.414,1.414-3.5,3.5,3.5,3.5Z",
                stroke_width: "0",
                fill: "currentColor",
            }
        }
    }
}
