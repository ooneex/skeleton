use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ChristianityIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ChristianityIcon(props: ChristianityIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M14 1V7H21V11H14V23H10V11H3V7H10V1H14Z",
                fill: "currentColor",
            }
        }
    }
}
