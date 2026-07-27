use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShapeTriangle2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShapeTriangle2Icon(props: ShapeTriangle2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M12 1.57056L0.224609 20.9999H23.7754L12 1.57056Z",
                fill: "currentColor",
            }
        }
    }
}
