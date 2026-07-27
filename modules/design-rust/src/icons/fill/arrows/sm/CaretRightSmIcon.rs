use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CaretRightSmIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CaretRightSmIcon(props: CaretRightSmIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.49999 6.00001L8.49999 18L17.5 12L8.49999 6.00001Z",
                fill: "currentColor",
            }
        }
    }
}
