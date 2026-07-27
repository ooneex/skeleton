use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct ShortsIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn ShortsIcon(props: ShortsIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M22 21H15L12.5 12.5H11.5L9 21H2L4 3H10.8066L8.71289 8.58496L10.585 9.28711L12 5.51562L13.415 9.28711L15.2871 8.58496L13.1934 3H20L22 21Z",
                fill: "currentColor",
            }
        }
    }
}
