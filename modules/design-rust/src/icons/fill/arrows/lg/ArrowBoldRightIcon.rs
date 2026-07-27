use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ArrowBoldRightIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ArrowBoldRightIcon(props: ArrowBoldRightIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 48 48",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M4 19L4 24L4 29L27 29L27 39.7183L44.4963 24L27 8.28174L27 19L4 19Z",
                fill: "currentColor",
            }
        }
    }
}
