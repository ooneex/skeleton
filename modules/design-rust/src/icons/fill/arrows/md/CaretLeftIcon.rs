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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M23 29L23 3L5 16L23 29Z",
                fill: "currentColor",
            }
        }
    }
}
