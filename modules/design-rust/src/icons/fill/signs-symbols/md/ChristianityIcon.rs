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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 1H13V9H4V15H13V31H19V15H28V9H19V1Z",
                fill: "currentColor",
            }
        }
    }
}
