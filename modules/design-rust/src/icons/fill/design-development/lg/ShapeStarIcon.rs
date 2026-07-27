use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeStarIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeStarIcon(props: ShapeStarIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23.9999 3.24487L17.311 16.7653L2.34717 18.9348L13.1751 29.4628L10.6204 44.326L23.9999 37.3088L37.3794 44.326L34.8247 29.4628L45.6527 18.9348L30.6888 16.7653L23.9999 3.24487Z",
                fill: "currentColor",
            }
        }
    }
}
