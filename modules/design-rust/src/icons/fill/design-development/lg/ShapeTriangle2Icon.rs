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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M23.9999 2.94092L45.6996 42H2.30054L23.9999 2.94092Z",
                fill: "currentColor",
            }
        }
    }
}
