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
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M24 27.6429L14.6603 18.3032L8.94493 23.9553L4.14172 4.14185L23.9552 8.94501L18.3032 14.6603L27.6428 24.0001L24 27.6429Z",
                fill: "currentColor",
            }
        }
    }
}
