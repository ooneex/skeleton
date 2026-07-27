use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeRectangleIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeRectangleIcon(props: ShapeRectangleIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M2 2V22H22V2H2Z",
                fill: "currentColor",
            }
        }
    }
}
