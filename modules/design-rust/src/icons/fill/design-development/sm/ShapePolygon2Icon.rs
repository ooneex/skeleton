use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapePolygon2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapePolygon2Icon(props: ShapePolygon2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 1.5L1.5 9.13932L5.51064 21.5H18.4894L22.5 9.13932L12 1.5Z",
                fill: "currentColor",
            }
        }
    }
}
