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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                fill_rule: "evenodd",
                clip_rule: "evenodd",
                d: "M26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6C2 3.79086 3.79086 2 6 2H26ZM6 23L26 23L26 6L6 6L6 23Z",
                fill: "currentColor",
            }
        }
    }
}
