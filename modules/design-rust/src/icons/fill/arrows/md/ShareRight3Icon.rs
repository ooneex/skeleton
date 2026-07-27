use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShareRight3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShareRight3Icon(props: ShareRight3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14.8462 2.08008L31 16L14.8462 29.9202V20.6401H11.44C6.35929 20.6401 2.12624 24.2073 1.19198 29H1V22.28C1 16.2049 5.92486 11.36 12 11.36H14.8462V2.08008Z",
                fill: "currentColor",
            }
        }
    }
}
