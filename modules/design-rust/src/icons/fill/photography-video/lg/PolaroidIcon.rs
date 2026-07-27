use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct PolaroidIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn PolaroidIcon(props: PolaroidIconProps) -> Element {
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
                d: "M44 38C44 41.3137 41.3137 44 38 44L10 44C6.68629 44 4 41.3137 4 38L4 10C4 6.68629 6.68629 4 10 4L38 4C41.3137 4 44 6.68629 44 10L44 38ZM9 35L39 35L39 9L9 9L9 35Z",
                fill: "currentColor",
            }
        }
    }
}
