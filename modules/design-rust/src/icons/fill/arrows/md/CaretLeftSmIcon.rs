use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretLeftSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretLeftSmIcon(props: CaretLeftSmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19.5 9L19.5 23L9.5 16L19.5 9Z",
                fill: "currentColor",
            }
        }
    }
}
