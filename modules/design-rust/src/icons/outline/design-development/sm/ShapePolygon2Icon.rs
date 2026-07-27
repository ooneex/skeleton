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
                d: "M12 2L21.9861 9.25532L18.1717 20.9947H5.82825L2.01391 9.25532L12 2Z",
                stroke: "currentColor",
                stroke_width: "2",
                "data-cap": "butt",
                fill: "none",
            }
        }
    }
}
