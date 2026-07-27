use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct CursorIconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn CursorIcon(props: CursorIconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M17.5855 21L11.0647 14.4793L6.94489 18.4028L3.12561 3.12549L18.4029 6.94481L14.5647 10.9793L21.0855 17.5L17.5855 21Z",
                fill: "currentColor",
            }
        }
    }
}
