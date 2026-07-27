use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Cutlery2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Cutlery2Icon(props: Cutlery2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M19 16H14V6C14 3.23858 16.2386 1 19 1H21V23H19V16Z",
                fill: "currentColor",
                "data-color": "color-2",
            }
            path {
                d: "M6 1H8V23H6V1Z",
                fill: "currentColor",
            }
            path {
                d: "M2 7.5V1H4V7.5C4 8.32843 4.67157 9 5.5 9H8.5C9.32843 9 10 8.32843 10 7.5V1H12V7.5C12 9.433 10.433 11 8.5 11H5.5C3.567 11 2 9.433 2 7.5Z",
                fill: "currentColor",
            }
        }
    }
}
