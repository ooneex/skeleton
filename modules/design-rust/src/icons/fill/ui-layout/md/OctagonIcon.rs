use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct OctagonIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn OctagonIcon(props: OctagonIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M10.3858 2L2 10.3858V21.6142L10.3858 30H21.6142L30 21.6142V10.3613L21.6133 2H10.3858Z",
                fill: "currentColor",
            }
        }
    }
}
