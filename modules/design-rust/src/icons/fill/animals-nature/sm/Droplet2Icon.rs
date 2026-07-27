use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Droplet2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Droplet2Icon(props: Droplet2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M3.5 14.3544C3.5 8.77028 12 1.5 12 1.5C12 1.5 20.5 8.75473 20.5 14.3544C20.5 19.5476 16.1434 22.5 12 22.5C7.85664 22.5 3.5 19.5476 3.5 14.3544Z",
                fill: "currentColor",
            }
        }
    }
}
