use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cutlery3IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cutlery3Icon(props: Cutlery3IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 32 32",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M26 22H18V10C18 5.58173 21.5817 2 26 2H28V31H26V22Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M8 15H10V31H8V15Z",
                fill: "currentColor",
            }
            path {
                d: "M15 9.5C15 13.1875 12.4767 16.5 9 16.5C5.52332 16.5 3 13.1875 3 9.5C3 5.81247 5.52332 2.5 9 2.5C12.4767 2.5 15 5.81247 15 9.5Z",
                fill: "currentColor",
            }
        }
    }
}
