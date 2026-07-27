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
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.1858 2L2 15.1858V32.8142L15.1858 46H32.8142L46 32.8142V15.1467L32.8133 2H15.1858Z",
                fill: "currentColor",
            }
        }
    }
}
