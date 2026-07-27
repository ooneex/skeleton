use dioxus::prelude::*;

#[derive(Props, Clone, PartialEq)]
pub struct Tshirt2IconProps {
    #[props(extends = svg, extends = GlobalAttributes)]
    pub attributes: Vec<Attribute>,
}

#[component]
pub fn Tshirt2Icon(props: Tshirt2IconProps) -> Element {
    rsx! {
        svg {
            height: "16",
            width: "16",
            view_box: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            ..props.attributes,
            path {
                d: "M8.27246 3.08984C8.70017 4.80018 10.237 6 12 6C13.763 6 15.2998 4.80018 15.7275 3.08984L16 2H19C21.2091 2 23 3.79086 23 6V13H20V9H18V22H6V9H4V13H1V6C1 3.79086 2.79086 2 5 2H8L8.27246 3.08984Z",
                fill: "currentColor",
            }
        }
    }
}
