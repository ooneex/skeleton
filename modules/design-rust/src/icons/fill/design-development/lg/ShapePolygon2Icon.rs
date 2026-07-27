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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24.0001 1.75244L1.83203 18.2841L10.289 44.9999H37.7112L46.1681 18.2841L24.0001 1.75244Z",
                fill: "currentColor",
            }
        }
    }
}
