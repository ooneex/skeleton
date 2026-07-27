use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareLeft3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareLeft3Icon(props: ShareLeft3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.1538 2.08008L1 16L17.1538 29.9202V20.6401H20.56C25.6407 20.6401 29.8738 24.2073 30.808 29H31V22.28C31 16.2049 26.0751 11.36 20 11.36H17.1538V2.08008Z",
                fill: "currentColor",
            }
        }
    }
}
