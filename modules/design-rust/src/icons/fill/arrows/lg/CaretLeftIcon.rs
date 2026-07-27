use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftIcon(props: CaretLeftIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M34 42L34 6L8 24L34 42Z",
                fill: "currentColor",
            }
        }
    }
}
