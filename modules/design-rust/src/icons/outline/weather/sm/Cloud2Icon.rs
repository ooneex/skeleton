use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cloud2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cloud2Icon(props: Cloud2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "m19,19c2.2,0,4-1.8,4-4s-1.8-4-4-4h0c-.3-3.9-3.5-7-7.5-7s-7.3,3.2-7.5,7.1c-1.7.4-3,2-3,3.9,0,2.2,1.8,4,4,4h14Z",
                fill: "none",
                stroke: "currentColor",
                stroke_linecap: "square",
                stroke_miterlimit: "10",
                stroke_width: "2",
            }
        }
    }
}
