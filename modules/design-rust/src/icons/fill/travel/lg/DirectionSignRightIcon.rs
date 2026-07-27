use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct DirectionSignRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn DirectionSignRightIcon(props: DirectionSignRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M27 46H21V29H27V46Z",
                fill: "currentColor",
            }
            path {
                d: "M21 7L27 7L27 2L21 2L21 7Z",
                fill: "currentColor",
            }
            path {
                d: "M37.0898 26L44.3506 18L37.0898 10L6 10L6 26L37.0898 26Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
        }
    }
}
