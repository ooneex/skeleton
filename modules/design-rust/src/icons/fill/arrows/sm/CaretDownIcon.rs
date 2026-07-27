use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretDownIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretDownIcon(props: CaretDownIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M21 7L3 7L12 19L21 7Z",
                fill: "currentColor",
            }
        }
    }
}
