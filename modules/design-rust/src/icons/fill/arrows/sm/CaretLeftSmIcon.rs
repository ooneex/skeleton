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
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M15.5 18L15.5 6L6.49999 12L15.5 18Z",
                fill: "currentColor",
            }
        }
    }
}
