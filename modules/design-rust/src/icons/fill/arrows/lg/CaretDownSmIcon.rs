use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretDownSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretDownSmIcon(props: CaretDownSmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 18.5L34 18.5L24 32.5L14 18.5Z",
                fill: "currentColor",
            }
        }
    }
}
