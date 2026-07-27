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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M18 8.5L6 8.5L12 17.5L18 8.5Z",
                fill: "currentColor",
            }
        }
    }
}
