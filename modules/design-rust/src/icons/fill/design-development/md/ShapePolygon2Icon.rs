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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M16.0001 0.758545L1.32812 11.5518L6.92729 29H25.0729L30.672 11.5518L16.0001 0.758545Z",
                fill: "currentColor",
            }
        }
    }
}
