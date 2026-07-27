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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M31.7232 28.9999L16 1.48438L0.276855 28.9999H31.7232Z",
                fill: "currentColor",
            }
        }
    }
}
