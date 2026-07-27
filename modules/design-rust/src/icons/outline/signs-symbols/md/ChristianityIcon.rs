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
                d: "M19 2H13V9H5V15H13V30H19V15H27V9H19V2Z",
                stroke: "currentColor",
                stroke_width: "2",
                stroke_linecap: "square",
                fill: "none",
            }
        }
    }
}
